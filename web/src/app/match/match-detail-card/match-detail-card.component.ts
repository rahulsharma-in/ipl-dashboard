import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-detail-card',
  templateUrl: './match-detail-card.component.html',
  styleUrls: ['./match-detail-card.component.scss']
})
export class MatchDetailCardComponent implements OnInit {
  @Input() match: any;
  @Input() teamName: string;
  public otherTeam: string;
  public isDraw: boolean;
  public winBy: string;
  public resultMargin: string;
  constructor() { }

  ngOnInit(): void {
    this.otherTeam = this.match.team1 === this.teamName ? this.match.team2 : this.match.team1;
    this.winBy = this.match.winByRuns === "0" ? "wickets" : "runs";
    this.resultMargin = this.match.winByRuns === "0" ? this.match.winByWickets : this.match.winByRuns;
  }

}
