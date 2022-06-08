import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-small-card',
  templateUrl: './match-small-card.component.html',
  styleUrls: ['./match-small-card.component.scss']
})
export class MatchSmallCardComponent implements OnInit {
  @Input() match: any;
  @Input() teamName: string;
  public otherTeam: string;
  public isDraw: boolean;
  public winBy: string;
  public resultMargin: string;
  public wonMatch : boolean;
  constructor() { }

  ngOnInit(): void {
    this.otherTeam = this.match.team1 === this.teamName ? this.match.team2 : this.match.team1;
    this.winBy = this.match.winByRuns === "0" ? "wickets" : "runs";
    this.resultMargin = this.match.winByRuns === "0" ? this.match.winByWickets : this.match.winByRuns;
    this.wonMatch = this.teamName === this.match.matchWinner;
  }

}
