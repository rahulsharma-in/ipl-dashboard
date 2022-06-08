import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public years: number[];
  public selectedValue: number;
  constructor(public teamService: TeamService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    this.year = this.route.snapshot.paramMap.get('year');
    this.teamService.fetchTeamMatches(this.teamName, this.year).subscribe((response : any) => {
      this.matches = response;
    })
    this.years = new Array();
    for (let i = 2008; i <= 2016; i++) {
      this.years.push(i);
    }
  }

  modelChangeFn(value: any) {
    var redirectURL = 'matches/' + this.teamName + '/' + value;
    this.router.navigate([redirectURL]);
    this.year = value;
    this.teamService.fetchTeamMatches(this.teamName, this.year).subscribe((response : any) => {
      this.matches = response;
    })
  }

}
