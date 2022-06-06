package com.ipl.ipldashboard.services;

import com.ipl.ipldashboard.model.Match;

import java.util.List;

public interface MatchService {

    List<Match> findByTeam1OrTeam2(String teamName1, String teamName2, int pageNo, int pageSize);

    List<Match> getMatchesForTeam(String teamName, int year);
}
