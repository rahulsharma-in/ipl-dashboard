import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-team-landing',
  templateUrl: './team-landing.component.html',
  styleUrls: ['./team-landing.component.scss']
})
export class TeamLandingComponent implements OnInit {

  public team: any = [];

  constructor(public teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.fetchMatches('Rajasthan Royals').subscribe((response: any) => {
      this.team = response;
      console.log(response);
    })
  }

}
