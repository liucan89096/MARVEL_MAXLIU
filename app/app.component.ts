/**
 * @Author: Max LIU
 * @Date: 2017/2/16
 * @Last_Modified_by: Max LIU
 * @Last_Modified_time: 2017/2/16
 * @Description: The component of app
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Comic} from './comic'

import {ComicsService} from './comics.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  orderBy: string;
  searchtext: string;


  // heroes: Hero[];

  constructor(
    private heroService: ComicsService,
              private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    // this.route.params
    //   .subscribe(params => {
    //     this.orderBy = params['orderBy'];
    //     console.log(params['orderBy']);
    //     console.log(this.orderBy);
    //   });
  }

  search(): void {
    this.router.navigate(['/search/comics', this.searchtext, 1]);
  }

}
