import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent }  from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

import {ComicsService} from './comics.service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  providers: [ComicsService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
