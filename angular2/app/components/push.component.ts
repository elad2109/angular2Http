import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {PushResult}        from '../dto/pushResult';
import {PushService}       from '../services/push.service';

@Component({
    selector: 'push-comp',
    template: '<button (click)="getHeroes()"> Send push2 </button>',
    // templateUrl: 'app/html/heroes.component.html',
    providers: [PushService]
})
export class PushComponent implements OnInit {
    pushResult:PushResult;
    // selectedHero:Hero;
    // addingHero = false;
    error:any;

    constructor(private pushService:PushService) {
        console.info("in PushComponent constructor()");

    }

    getHeroes() {
        this.pushService
            .doSomeGet();
            // .then(pushResult => this.pushResult = pushResult)
            // .catch(error => this.error = error);
    }
    ngOnInit() {
        console.info("in PushComponent ngOnInit()");
        this.getHeroes();
    }

}
