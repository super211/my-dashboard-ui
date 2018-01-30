import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Port1} from "../models/index";

@Injectable()
export class Port1Service {
    private headers = new Headers({'Content-Type': 'application/json'});
    private productsUrl = 'app/port1';

    constructor(private http:Http) {
    }

    getPort1():Promise<Port1[]> {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.productsUrl)
            .toPromise()
            .then(response => response.json().data as Port1[])
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
