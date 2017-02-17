/**
 * @Author: Max LIU
 * @Date: 2017/2/16
 * @Last_Modified_by: Max LIU
 * @Last_Modified_time: 2017/2/16
 * @Description: The module of routing
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ComicsComponent} from './comics/comics.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {path: '', redirectTo: '/comics/orderBy/title/1', pathMatch: 'full'},
  {path: 'comics/orderBy/:orderBy/:currentPage', component: ComicsComponent},
  {path: 'search/:category/:keyword/:currentPage', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
