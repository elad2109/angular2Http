import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {PushResult}        from '../dto/pushResult';
import {PushRequest}       from '../dto/pushRequest';
import {PushService}       from '../services/push.service';

@Component({
    selector: 'push-comp',
    template:
      //   `<form (submit)="submitForm()">
      //   <input [(ngModel)]="element.name"/>
      //
      //   <button type="submit">Submit the form</button>
      // </form>
      // <br>
    '<button (click)="getHeroes()"> get </button> <button (click)="saveHeroes()"> push </button>',
    // templateUrl: 'app/html/heroes.component.html',
    providers: [PushService]
})
export class PushComponent implements OnInit {
    pushResult:PushResult;
    // selectedHero:Hero;
    // addingHero = false;
    error:any;
    element:any;

    constructor(private pushService:PushService) {
        console.info("in PushComponent constructor()");

    }

    getHeroes() {
        this.pushService
            .doSomeGet();
            // .then(pushResult => this.pushResult = pushResult)
            // .catch(error => this.error = error);
    }


    saveHeroes() {
        var pushRequest: PushRequest = new PushRequest();
        // this.pushService.doSelectMessagesAttributesUrl2(pushRequest);
        this.pushService.doFeatureCreateNewMessageUrl(pushRequest);
        this.pushService.doFeatureSelectPushMessages(this.element);
        // .then(pushResult => this.pushResult = pushResult)
        // .catch(error => this.error = error);
    }





    ngOnInit() {
        console.info("in PushComponent ngOnInit()");
       //  this.getHeroes();
         this.saveHeroes();
    }

}
