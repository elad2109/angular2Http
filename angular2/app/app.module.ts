import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}     from '@angular/http';

import {AppComponent}  from './app.component';
import {PushComponent}  from './components/push.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [AppComponent, PushComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}

