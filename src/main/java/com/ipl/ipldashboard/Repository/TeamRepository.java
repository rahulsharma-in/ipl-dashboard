package com.ipl.ipldashboard.Repository;

import com.ipl.ipldashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Optional<Team> findByTeamName(String teamName);

}
