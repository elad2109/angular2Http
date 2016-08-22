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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/Rx');
var stringUtils_service_1 = require("./stringUtils.service");
var PushService = (function () {
    function PushService(http) {
        this.http = http;
        //private pushUrl = 'http://www.ynet.com';  // URL to web api
        //  private getUrl = '/app/eladb.json';  // URL to web api
        this.getUrl = '/SupporTool/ShowConfig?id=4'; // URL to web api
        this.selectMessagesAttributesUrl = '/SupporTool/Push/SelectMessagesAttributes'; // URL to web api
        this.postMultiMap = '/SupporTool/Push/FeatureCreateNewMessage'; // URL to web api
        this.postBoolean = '/SupporTool/Push/FeatureSelectPushMessages'; // URL to web api
        this.stringUtilsService = new stringUtils_service_1.StringUtilsService();
    }
    PushService.prototype.doSomeGet = function () {
        console.info("sending get request");
        var headers = new http_1.Headers({
            'Content-Type': 'application/xml' });
        this.http.get(this.getUrl, { headers: headers })
            .map(function (res) { return res.text(); })
            .subscribe(function (data) { console.info("next: " + data); }, function (err) { return console.error(err); });
    };
    PushService.prototype.doSelectMessagesAttributesUrl2 = function (pushRequest) {
        console.info("sending post request");
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        return this.http
            .post(this.selectMessagesAttributesUrl, "", { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { console.info("next: "); console.info(data); }, function (err) { return console.error(err); });
    };
    PushService.prototype.doFeatureCreateNewMessageUrl = function (pushRequest) {
        console.info("sending post request");
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded' });
        var isLimit = true;
        return this.http
            .post(this.postBoolean, "#limit=" + isLimit, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { console.info("next: "); console.info(data); }, function (err) { return console.error(err); });
    };
    PushService.prototype.doFeatureSelectPushMessages = function (element) {
        console.info("sending post request");
        var dict = { "limit": "true", "name": "foo" };
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded' });
        var params = {};
        params['push_input_internal_id'] = "1";
        params['b'] = "2";
        var formParamString = this.stringUtilsService.mapToFormParamsString(params);
        return this.http
            .post(this.postMultiMap, formParamString, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { console.info("next: "); console.info(data); }, function (err) { return console.error(err); });
    };
    PushService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        // return Promise.reject(error.message || error);
    };
    PushService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PushService);
    return PushService;
}());
exports.PushService = PushService;
//# sourceMappingURL=push.service.js.map