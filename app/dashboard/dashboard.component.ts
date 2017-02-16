/**
 * Created by 70243 on 2016/12/22.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

// import {Hero} from '../hero';
import {Comic} from '../comic'

import {ComicsService} from '../comics.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orderBy: string;
  loading: boolean;
  totalCount: number;
  currentPage: number;
  totalPages: number;
  comics: Comic[];


  // heroes: Hero[];

  constructor(private heroService: ComicsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.comics = [];

    // this.heroService.getComics('onsaleDate').then(data => {
    //   this.data = data;
    //   this.getInfo(data, Comics);
    // });

    this.route.params
      .switchMap((params: Params) => {
        this.loading = true;

        this.orderBy = params['orderBy'];
        this.currentPage = params['currentPage'];
        return this.heroService.getComics(this.orderBy, this.currentPage);
      })
      .subscribe(data => {
        this.totalCount = data.total;
        this.totalPages = Math.ceil(this.totalCount / 10);
        this.getInfo(data);
        console.log(this.comics);
        this.loading = false;
      });
  }

  getInfo(data: any): void {
    //Clear init Comics
    this.comics.length = 0;

    for (let i = 0; i < data.results.length; i++) {
      this.comics.push({
        id: data.results[i].id,
        title: data.results[i].title,
        pageCount: data.results[i].pageCount,
        onsaleDate: data.results[i].dates[0].date,
        creators: data.results[i].creators.items,
        price: data.results[i].prices[0].price,
        description: data.results[i].description,
        series: data.results[i].series,
        thumbnail: data.results[i].thumbnail,
        url: ''
      });

      // Get Urls
      for (let j = 0; j < data.results[i].urls.length; j++) {
        if (data.results[i].urls[j].type === 'detail') {
          this.comics[i].url = data.results[i].urls[j].url;
        } else {
          this.comics[i].url = 'http://marvel.com';
        }
      }
    }
  }
}
