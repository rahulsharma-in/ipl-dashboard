package com.ipl.ipldashboard.listener;

import com.ipl.ipldashboard.model.Team;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.HashMap;
import java.util.Map;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

    private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

    private final EntityManager entityManager;

    @Autowired
    public JobCompletionNotificationListener(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public void afterJob(JobExecution jobExecution) {
        if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
            log.info("!!! BATCH JOB FINISHED!");
        }

        Map<String, Team> teamData = new HashMap<String, Team>();

        // Total Matches teams played first
        entityManager.createQuery("select team1, count(*) from Match group by team1", Object[].class)
                .getResultList()
                .stream()
                .map(result -> new Team((String) result[0], Integer.parseInt(result[1].toString())))
                .forEach(team -> teamData.put(team.getTeamName(), team));

        // Total Matches teams played second
        entityManager.createQuery("select team2, count(*) from Match group by team2", Object[].class)
                .getResultList()
                .stream()
                .forEach(result -> {
                    Team exitingTeam = teamData.get((String) result[0]);
                    exitingTeam.setTotalMatches(exitingTeam.getTotalMatches() + Integer.parseInt(result[1].toString()));
                });

        // Matches Won by Each Team
        entityManager.createQuery("select matchWinner, count(*) from Match group by matchWinner", Object[].class)
                .getResultList()
                .stream()
                .forEach(result -> {
                    Team existingTeam = teamData.get((String) result[0]);
                    if (existingTeam != null) existingTeam.setTotalWins(Integer.parseInt(result[1].toString()));
                });

        teamData.values().forEach(team -> entityManager.persist(team));

    }
}