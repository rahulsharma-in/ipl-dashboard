import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-small-card',
  templateUrl: './match-small-card.component.html',
  styleUrls: ['./match-small-card.component.scss']
})
export class MatchSmallCardComponent implements OnInit {
  @Input() match: any;
  constructor() { }

  ngOnInit(): void {
  }

}
