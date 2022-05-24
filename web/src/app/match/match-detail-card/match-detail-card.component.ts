import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-detail-card',
  templateUrl: './match-detail-card.component.html',
  styleUrls: ['./match-detail-card.component.scss']
})
export class MatchDetailCardComponent implements OnInit {
  @Input() match: any;
  constructor() { }

  ngOnInit(): void {
  }

}
