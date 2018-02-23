import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Jobdispatcher } from "../models/index";
import { ProvisionCommand } from '../models/ProvisionCommand';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment.sit';
import { AppSettings } from '../app.settings';

@Injectable()
export class JobdispatcherService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private productsUrl = 'app/jobdispatcher';
    private onPremApiUrl: string;
    private jobDispatcherHome: string;

    constructor(private http: Http) {
        this.onPremApiUrl = (environment.env == 'local') ? AppSettings.ONPREM_ENDPOINT : AppSettings.ONPREM_ENDPOINT + 'jobdispatcher';
        this.jobDispatcherHome = this.onPremApiUrl + '/home';
    }

    getJobdispatcher(): Promise<Jobdispatcher[]> {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.productsUrl)
            .toPromise()
            .then(response => response.json().data as Jobdispatcher[])
            .catch(this.handleError);
    }

    postJobDispatcherCommand(data: ProvisionCommand): Observable<any> {
        return this.http.post(this.jobDispatcherHome, data, this.getOptions()).map((response: Response) => response.json());
    }

    private success(): Promise<any> {
        return Promise.resolve();
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private getOptions(): RequestOptions {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions();
        options.headers = headers;
        return options;
    }
}
