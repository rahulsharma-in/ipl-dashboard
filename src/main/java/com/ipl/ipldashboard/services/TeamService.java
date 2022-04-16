package com.ipl.ipldashboard.services;

import com.ipl.ipldashboard.model.Team;

public interface TeamService {

    public Team findByTeamName(String teamName);

}
