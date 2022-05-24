import { MatchModule } from './../match/match.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamLandingComponent } from './team-landing/team-landing.component';


@NgModule({
  declarations: [TeamLandingComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MatchModule
  ]
})
export class TeamModule { }
