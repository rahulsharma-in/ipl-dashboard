package com.ipl.ipldashboard.services.impl;

import com.ipl.ipldashboard.Repository.MatchRepository;
import com.ipl.ipldashboard.model.Match;
import com.ipl.ipldashboard.services.MatchService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchServiceImpl implements MatchService {

    private MatchRepository matchRepository;

    public MatchServiceImpl(MatchRepository matchRepository) {
        this.matchRepository = matchRepository;
    }

    @Override
    public List<Match> findByTeam1OrTeam2(String teamName1, String teamName2, int pageNo, int pageSize) {
        pageNo = pageNo < 0 ? 0 : pageNo;
        pageSize = pageSize <= 0 ? 5 : pageSize;
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return matchRepository.findByTeam1OrTeam2OrderByDateDesc(teamName1, teamName2, pageable);
    }

}
