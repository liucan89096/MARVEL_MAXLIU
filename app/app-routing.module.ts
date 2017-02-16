/**
 * Created by 70243 on 2016/12/22.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/orderBy/title/1', pathMatch: 'full'},
  {path: 'orderBy/:orderBy/:currentPage', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
