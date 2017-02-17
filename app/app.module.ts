/**
 * @Author: Max LIU
 * @Date: 2017/2/16
 * @Last_Modified_by: Max LIU
 * @Last_Modified_time: 2017/2/16
 * @Description: The module of app
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent}  from './app.component';
import {ComicsComponent} from './comics/comics.component';
import {SearchComponent} from './search/search.component';

import {ComicsService} from './comics.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ComicsComponent,
    SearchComponent
  ],
  providers: [ComicsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
