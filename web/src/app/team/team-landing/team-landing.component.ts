import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/core/services/team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-landing',
  templateUrl: './team-landing.component.html',
  styleUrls: ['./team-landing.component.scss']
})
export class TeamLandingComponent implements OnInit {

  public team: any = [];
  private teamName: string;
  constructor(public teamService: TeamService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.teamName = this.route.snapshot.paramMap.get('teamName')
    this.teamService.fetchMatches(this.teamName).subscribe((response: any) => {
      this.team = response;
      console.log(response);
    })
  }

}
