"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @Author: Max LIU
 * @Date: 2017/2/16
 * @Last_Modified_by: Max LIU
 * @Last_Modified_time: 2017/2/16
 * @Description: The fetching data service
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ComicsService = (function () {
    function ComicsService(http) {
        this.http = http;
        this.apikey = 'bd4051d9863bbdb25c036c135f02184d';
        this.ts = '1';
        this.hash = 'ebf9240766b78d0873d55c08a5461d3b';
        this.limit = 10;
        this.suffix = "?apikey=" + this.apikey + "&ts=" + this.ts + "&hash=" + this.hash + "&limit=" + this.limit;
        this.url = "http://gateway.marvel.com:80/v1/public";
    }
    ComicsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ComicsService.prototype.getComics = function (orderBy, currentPage) {
        return this.http.get(this.url + "/comics" + this.suffix + "&orderBy=" + orderBy + "&offset=" + (currentPage * 10 - 10))
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        // return Promise.resolve(HEROES);
    };
    ComicsService.prototype.getComic = function (category, keyword, currentPage) {
        return this.http.get(this.url + "/" + category + this.suffix + "&titleStartsWith=" + keyword + "&offset=" + (currentPage * 10 - 10))
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        // return Promise.resolve(HEROES);
    };
    return ComicsService;
}());
ComicsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ComicsService);
exports.ComicsService = ComicsService;
//# sourceMappingURL=comics.service.js.map