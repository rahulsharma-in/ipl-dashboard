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
  private teamName: string;
  constructor(public matchService: MatchService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.teamName = this.route.snapshot.paramMap.get('teamName')
    this.matchService.fetchMatches(this.teamName).subscribe((response: any) => {
      this.team = response;
    })
  }

}
