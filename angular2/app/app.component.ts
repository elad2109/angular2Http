import {Component} from '@angular/core';
import {PushComponent}  from './components/push.component';

@Component({
    selector: 'my-app',
    template: '<h1>My 3rd Angular 2 App</h1> <push-comp></push-comp>',
    directives: [PushComponent]
})
export class AppComponent {
}

