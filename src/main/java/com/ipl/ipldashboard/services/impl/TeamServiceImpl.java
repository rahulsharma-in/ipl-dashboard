package com.ipl.ipldashboard.services.impl;

import com.ipl.ipldashboard.Repository.TeamRepository;
import com.ipl.ipldashboard.model.Team;
import com.ipl.ipldashboard.services.TeamService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TeamServiceImpl implements TeamService {

    private TeamRepository teamRepository;

    public TeamServiceImpl(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @Override
    public Team findByTeamName(String teamName) {
        Optional<Team> team = teamRepository.findByTeamName(teamName);
        if (team.isPresent()) return team.get();
        throw new RuntimeException("Invalid Team Name found");
    }

}
