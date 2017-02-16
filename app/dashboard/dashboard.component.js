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
 * Created by 70243 on 2016/12/22.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var comics_service_1 = require("../comics.service");
var DashboardComponent = (function () {
    // heroes: Hero[];
    function DashboardComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comics = [];
        // this.heroService.getComics('onsaleDate').then(data => {
        //   this.data = data;
        //   this.getInfo(data, Comics);
        // });
        this.route.params
            .switchMap(function (params) {
            _this.loading = true;
            _this.orderBy = params['orderBy'];
            _this.currentPage = params['currentPage'];
            return _this.heroService.getComics(_this.orderBy, _this.currentPage);
        })
            .subscribe(function (data) {
            _this.totalCount = data.total;
            _this.totalPages = Math.ceil(_this.totalCount / 10);
            _this.getInfo(data);
            console.log(_this.comics);
            _this.loading = false;
        });
    };
    DashboardComponent.prototype.getInfo = function (data) {
        //Clear init Comics
        this.comics.length = 0;
        for (var i = 0; i < data.results.length; i++) {
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
            for (var j = 0; j < data.results[i].urls.length; j++) {
                if (data.results[i].urls[j].type === 'detail') {
                    this.comics[i].url = data.results[i].urls[j].url;
                }
                else {
                    this.comics[i].url = 'http://marvel.com';
                }
            }
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-dashboard',
        templateUrl: 'dashboard.component.html',
        styleUrls: ['dashboard.component.css']
    }),
    __metadata("design:paramtypes", [comics_service_1.ComicsService,
        router_1.ActivatedRoute])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map