import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full'
  },
  {
    path: 'teams',
    loadChildren: () => import('./team/team.module').then(m => m.TeamModule)
  },
  {
    path: 'matches',
    loadChildren: () => import('./match/match.module').then(m => m.MatchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
