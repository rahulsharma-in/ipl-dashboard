package com.ipl.ipldashboard.controller;

import com.ipl.ipldashboard.model.Match;
import com.ipl.ipldashboard.services.MatchService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MatchController {

    private MatchService matchService;

    public MatchController(MatchService matchService) {
        this.matchService = matchService;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        return matchService.getMatchesForTeam(teamName, year);
    }
}
