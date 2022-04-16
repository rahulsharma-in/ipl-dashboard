package com.ipl.ipldashboard.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    private String teamName;
    private int totalMatches;
    private int totalWins;

    @Transient
    private List<Match> matches;

    public Team(String teamName, int totalMatches) {
        this.teamName = teamName;
        this.totalMatches = totalMatches;
    }

    @Override
    public String toString() {
        return "Team{" +
                "teamName='" + teamName + '\'' +
                ", totalMatches=" + totalMatches +
                ", totalWins=" + totalWins +
                '}';
    }
}