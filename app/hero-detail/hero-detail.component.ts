/**
 * Created by 70243 on 2016/12/22.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

// import {Hero} from '../hero';

import {ComicsService} from '../comics.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: ComicsService
  ) {
  }

  ngOnInit() {
    // this.route.params
    //   .switchMap((params: Params) => this.heroService.getHeroe(+params['id']))
    //   .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
