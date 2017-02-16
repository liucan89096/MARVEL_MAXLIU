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
var common_1 = require("@angular/common");
// import {Hero} from '../hero';
var comics_service_1 = require("../comics.service");
require("rxjs/add/operator/switchMap");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(route, location, heroService) {
        this.route = route;
        this.location = location;
        this.heroService = heroService;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        // this.route.params
        //   .switchMap((params: Params) => this.heroService.getHeroe(+params['id']))
        //   .subscribe(hero => this.hero = hero);
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroDetailComponent;
}());
HeroDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-hero-detail',
        templateUrl: 'hero-detail.component.html',
        styleUrls: ['hero-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        common_1.Location,
        comics_service_1.ComicsService])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map