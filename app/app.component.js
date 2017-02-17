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
 * @Description: The component of app
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var comics_service_1 = require("./comics.service");
require("rxjs/add/operator/switchMap");
var AppComponent = (function () {
    // heroes: Hero[];
    function AppComponent(heroService, route, router) {
        this.heroService = heroService;
        this.route = route;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.route.params
        //   .subscribe(params => {
        //     this.orderBy = params['orderBy'];
        //     console.log(params['orderBy']);
        //     console.log(this.orderBy);
        //   });
    };
    AppComponent.prototype.search = function () {
        this.router.navigate(['/search/comics', this.searchtext, 1]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css']
    }),
    __metadata("design:paramtypes", [comics_service_1.ComicsService,
        router_1.ActivatedRoute,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map