package com.ipl.ipldashboard.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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

    public Team(String teamName, int totalMatches) {
        this.teamName = teamName;
        this.totalMatches = totalMatches;
    }
}