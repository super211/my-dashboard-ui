import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Jobdispatcher } from "../models/index";

@Injectable()
export class JobdispatcherService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private productsUrl = 'app/jobdispatcher';

    constructor(private http: Http) {
    }

    getJobdispatcher(): Promise<Jobdispatcher[]> {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.productsUrl)
            .toPromise()
            .then(response => response.json().data as Jobdispatcher[])
            .catch(this.handleError);
    }

    private success(): Promise<any> {
        return Promise.resolve();
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
