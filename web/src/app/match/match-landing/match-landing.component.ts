import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-match-landing',
  templateUrl: './match-landing.component.html',
  styleUrls: ['./match-landing.component.scss']
})
export class MatchLandingComponent implements OnInit {

  public teamName: string;
  private year: string;
  public matches: any = [];
  constructor(public teamService: TeamService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    this.year = this.route.snapshot.paramMap.get('year');
    this.teamService.fetchTeamMatches(this.teamName, this.year).subscribe((response : any) => {
      this.matches = response;
      console.log(this.matches);
    })
  }

}
