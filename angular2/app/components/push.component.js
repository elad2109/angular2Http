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
var push_service_1 = require('../services/push.service');
var PushComponent = (function () {
    function PushComponent(pushService) {
        this.pushService = pushService;
        console.info("in PushComponent constructor()");
    }
    PushComponent.prototype.getHeroes = function () {
        this.pushService
            .doSomeGet();
        // .then(pushResult => this.pushResult = pushResult)
        // .catch(error => this.error = error);
    };
    PushComponent.prototype.ngOnInit = function () {
        console.info("in PushComponent ngOnInit()");
        this.getHeroes();
    };
    PushComponent = __decorate([
        core_1.Component({
            selector: 'push-comp',
            template: '<button (click)="getHeroes()"> Send push2 </button>',
            // templateUrl: 'app/html/heroes.component.html',
            providers: [push_service_1.PushService]
        }), 
        __metadata('design:paramtypes', [push_service_1.PushService])
    ], PushComponent);
    return PushComponent;
}());
exports.PushComponent = PushComponent;
//# sourceMappingURL=push.component.js.map