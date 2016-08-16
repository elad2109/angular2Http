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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var push_service_1 = require('app/services/push.service');
var HeroesComponent = (function () {
    function HeroesComponent(router, pushService) {
        this.router = router;
        this.pushService = pushService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.pushService
            .getHeroes()
            .then(function (pushResult) { return _this.pushResult = pushResult; })
            .catch(function (error) { return _this.error = error; });
    };
    // addHero() {
    //     this.addingHero = true;
    //     this.selectedHero = null;
    // }
    //
    // close(savedHero:Hero) {
    //     this.addingHero = false;
    //     if (savedHero) {
    //         this.getHeroes();
    //     }
    // }
    //
    // deleteHero(hero:Hero, event:any) {
    //     event.stopPropagation();
    //     this.heroService
    //         .delete(hero)
    //         .then(res => {
    //             this.heroes = this.heroes.filter(h => h !== hero);
    //             if (this.selectedHero === hero) {
    //                 this.selectedHero = null;
    //             }
    //         })
    //         .catch(error => this.error = error);
    // }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            templateUrl: 'app/html/heroes.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, (typeof (_a = typeof push_service_1.PushService !== 'undefined' && push_service_1.PushService) === 'function' && _a) || Object])
    ], HeroesComponent);
    return HeroesComponent;
    var _a;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=push.component.js.map