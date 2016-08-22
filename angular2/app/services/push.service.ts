import { Injectable }    from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { PushResult } from '../dto/pushResult';
import {PushRequest} from "../dto/pushRequest";
import {StringUtilsService} from "./stringUtils.service";


@Injectable()
export class PushService {
    //private pushUrl = 'http://www.ynet.com';  // URL to web api
    //  private getUrl = '/app/eladb.json';  // URL to web api
    private getUrl = '/SupporTool/ShowConfig?id=4';  // URL to web api
    private selectMessagesAttributesUrl = '/SupporTool/Push/SelectMessagesAttributes';  // URL to web api
    private postMultiMap = '/SupporTool/Push/FeatureCreateNewMessage';  // URL to web api
    private postBoolean = '/SupporTool/Push/FeatureSelectPushMessages';  // URL to web api

    private stringUtilsService : StringUtilsService;

    constructor(private http: Http) {
        this.stringUtilsService = new StringUtilsService();
    }

    doSomeGet() {
        console.info("sending get request");


        let headers = new Headers({
            'Content-Type': 'application/xml'});


        this.http.get(this.getUrl, {headers: headers})
            .map(res => res.text())
            .subscribe(
                data => { console.info("next: "+data) },
                err => console.error(err)
            );
    }

    doSelectMessagesAttributesUrl2(pushRequest : PushRequest) {
        console.info("sending post request");

        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

        return this.http
            .post(this.selectMessagesAttributesUrl, "", {headers: headers})
            .map(res => res.json())
            .subscribe(
                data => { console.info("next: "); console.info(data) },
                err => console.error(err)
            );
    }


    doFeatureCreateNewMessageUrl(pushRequest : PushRequest) {
        console.info("sending post request");

        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'});

        var isLimit = true;

        return this.http
            .post(this.postBoolean, "#limit="+isLimit, {headers: headers})
            .map(res => res.json())
            .subscribe(
                data => { console.info("next: "); console.info(data) },
                err => console.error(err)
            );
    }

    doFeatureSelectPushMessages(element : any) {
        console.info("sending post request");

        let dict = {"limit":"true", "name":"foo"}


        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'});


        var params = {};
        params['push_input_internal_id'] = "1";
        params['b'] = "2";

        var formParamString = this.stringUtilsService.mapToFormParamsString(params);

        return this.http
            .post(this.postMultiMap, formParamString , {headers: headers})
            .map(res => res.json())
            .subscribe(
                data => { console.info("next: "); console.info(data) },
                err => console.error(err)
            );
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        // return Promise.reject(error.message || error);
    }
}
