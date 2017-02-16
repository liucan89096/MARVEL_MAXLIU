/**
 * Created by 70243 on 2016/12/22.
 */
import {Injectable} from '@angular/core';

import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

// import {Hero} from './hero';
// import {HEROES} from './mock-heroes';

import {Comic} from './comic'

@Injectable()
export class ComicsService {
  private apikey = 'bd4051d9863bbdb25c036c135f02184d';
  private ts = '1';
  private hash = 'ebf9240766b78d0873d55c08a5461d3b';
  private limit = 10;


  private url = `http://gateway.marvel.com:80/v1/public/comics?apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}&limit=${this.limit}`;

  constructor(private http: Http) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getComics(orderBy: string, currentPage: number): Promise<any> {
    return this.http.get(`${this.url}&orderBy=${orderBy}&offset=${currentPage * 10 - 10}`)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);

    // return Promise.resolve(HEROES);
  }

  // getHeroe(id: number): Promise<Hero> {
  //   return this.getComics()
  //     .then(heroes => heroes.find(hero => hero.id === id));
  // }

}
