import { MatchService } from './../../core/services/match.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-landing',
  templateUrl: './team-landing.component.html',
  styleUrls: ['./team-landing.component.scss']
})
export class TeamLandingComponent implements OnInit {

  public team: any = [];
  public oneSlicedTeamMatches: any = [];
  private teamName: string;
  public wins: number;
  public losses: number;
  constructor(public matchService: MatchService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    this.matchService.fetchMatches(this.teamName).subscribe((response: any) => {
      this.team = response;
      if (this.team != undefined && this.team.matches.length > 1) {
        this.oneSlicedTeamMatches = this.team.matches.slice(1, this.team.matches.length);
        this.wins = this.team.totalWins;
        this.losses = this.team.totalMatches - this.wins;
      }
    })
  }

}
