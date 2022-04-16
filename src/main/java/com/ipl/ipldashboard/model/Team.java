package com.ipl.ipldashboard.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Team {

    private long Id;
    private String teamName;
    private int totalMatches;
    private int totalWins;

}