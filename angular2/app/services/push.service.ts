import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { PushResult } from '../dto/pushResult';


@Injectable()
export class PushService {
    //private pushUrl = 'http://www.ynet.com';  // URL to web api
     private pushUrl = '/app/eladb.json';  // URL to web api

    constructor(private http: Http) { }

    doSomeGet() {
        console.info("sending get request");

        this.http.get(this.pushUrl)
            .forEach(function (response) { console.info(response.json()); })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        // return Promise.reject(error.message || error);
    }
}
