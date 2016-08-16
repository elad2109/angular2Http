import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { PushResult } from '../dto/pushResult';


@Injectable()
export class PushService {
    private pushUrl = 'www.google.com';  // URL to web api
    // private pushUrl = 'app/heroes';  // URL to web api

    constructor(private http: Http) { }

    doSomeGet() {
        console.info("sending get request");

        return this.http.get(this.pushUrl)
            .toPromise()
            .then(response => response.json().data as PushResult[])
            .catch(this.handleError);
    }
    goGetForId(id: number) {
        return this.doSomeGet()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
    // save(hero: Hero): Promise<Hero>  {
    //     if (hero.id) {
    //         return this.put(hero);
    //     }
    //     return this.post(hero);
    // }
    // delete(hero: Hero) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     let url = `${this.pushUrl}/${hero.id}`;
    //     return this.http
    //         .delete(url, {headers: headers})
    //         .toPromise()
    //         .catch(this.handleError);
    // }
    // // Add new Hero
    // private post(hero: Hero): Promise<Hero> {
    //     let headers = new Headers({
    //         'Content-Type': 'application/json'});
    //     return this.http
    //         .post(this.pushUrl, JSON.stringify(hero), {headers: headers})
    //         .toPromise()
    //         .then(res => res.json().data)
    //         .catch(this.handleError);
    // }
    // // Update existing Hero
    // private put(hero: Hero) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     let url = `${this.pushUrl}/${hero.id}`;
    //     return this.http
    //         .put(url, JSON.stringify(hero), {headers: headers})
    //         .toPromise()
    //         .then(() => hero)
    //         .catch(this.handleError);
    // }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
