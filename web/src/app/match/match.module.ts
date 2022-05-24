import { MatchSmallCardComponent } from './match-small-card/match-small-card.component';
import { MatchDetailCardComponent } from './match-detail-card/match-detail-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { MatchLandingComponent } from './match-landing/match-landing.component';


@NgModule({
  declarations: [MatchDetailCardComponent, MatchSmallCardComponent, MatchLandingComponent],
  imports: [
    CommonModule,
    MatchRoutingModule
  ],
  exports: [MatchDetailCardComponent, MatchSmallCardComponent]
})
export class MatchModule { }
