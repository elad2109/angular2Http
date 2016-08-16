import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {PushResult}        from 'app/dto/pushResult';
import {PushService}       from 'app/services/push.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/html/heroes.component.html'
})
export class HeroesComponent implements OnInit {
    pushResult:PushResult;
    // selectedHero:Hero;
    // addingHero = false;
    error:any;

    constructor(private router:Router,
                private pushService:PushService) {
    }

    getHeroes() {
        this.pushService
            .doSomeGet()
            .then(pushResult => this.pushResult = pushResult)
            .catch(error => this.error = error);
    }

    // addHero() {
    //     this.addingHero = true;
    //     this.selectedHero = null;
    // }
    //
    // close(savedHero:Hero) {
    //     this.addingHero = false;
    //     if (savedHero) {
    //         this.doSomeGet();
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

    ngOnInit() {
        this.getHeroes();
    }



    // onSelect(hero:Hero) {
    //     this.selectedHero = hero;
    //     this.addingHero = false;
    // }
    //
    // gotoDetail() {
    //     this.router.navigate(['/detail', this.selectedHero.id]);
    // }
}
