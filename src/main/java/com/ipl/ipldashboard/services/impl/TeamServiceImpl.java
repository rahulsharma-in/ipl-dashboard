package com.ipl.ipldashboard.services.impl;

import com.ipl.ipldashboard.Repository.TeamRepository;
import com.ipl.ipldashboard.model.Match;
import com.ipl.ipldashboard.model.Team;
import com.ipl.ipldashboard.services.MatchService;
import com.ipl.ipldashboard.services.TeamService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamServiceImpl implements TeamService {

    private TeamRepository teamRepository;
    private MatchService matchService;

    public TeamServiceImpl(TeamRepository teamRepository,
                           MatchService matchService) {
        this.teamRepository = teamRepository;
        this.matchService = matchService;
    }

    @Override
    public Team findByTeamName(String teamName) {
        Optional<Team> optionalTeam = teamRepository.findByTeamName(teamName);
        if (optionalTeam.isPresent()) {
            Team team = optionalTeam.get();
            List<Match> matches = matchService.findByTeam1OrTeam2(teamName, teamName, 0, 4);
            team.setMatches(matches);
            return team;
        }
        throw new RuntimeException("Invalid Team Name found");
    }

}
