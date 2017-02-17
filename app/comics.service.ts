/**
 * @Author: Max LIU
 * @Date: 2017/2/16
 * @Last_Modified_by: Max LIU
 * @Last_Modified_time: 2017/2/16
 * @Description: The fetching data service
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

  private suffix = `?apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}&limit=${this.limit}`;
  private url = `http://gateway.marvel.com:80/v1/public`;

  constructor(private http: Http) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getComics(orderBy: string, currentPage: number): Promise<any> {
    return this.http.get(`${this.url}/comics${this.suffix}&orderBy=${orderBy}&offset=${currentPage * 10 - 10}`)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);

    // return Promise.resolve(HEROES);
  }

  getComic(category: string, keyword: string, currentPage: number): Promise<any> {
    return this.http.get(`${this.url}/${category}${this.suffix}&titleStartsWith=${keyword}&offset=${currentPage * 10 - 10}`)
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
