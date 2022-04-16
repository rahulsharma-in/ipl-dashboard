package com.ipl.ipldashboard.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Match {

    @Id
    private long id;
    private String season;
    private String city;
    private LocalDate date;
    private String team1;
    private String team2;
    private String tossWinner;
    private String tossDecision;
    private String result;
    private String matchWinner;
    private String winByRuns;
    private String winByWickets;
    private String playerOfMatch;
    private String venue;
    private String umpire1;
    private String umpire2;
}
