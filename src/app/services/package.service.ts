import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Package} from "../models/index";

@Injectable()
export class PackageService {
    private headers = new Headers({'Content-Type': 'application/json'});
    //private packageUrl = 'http://13.228.156.28/jobdispatcher/package';
    private packageUrl = 'http://13.228.156.28/serverinfo/serverinfo';

    constructor(private http:Http) {
    }

    getPackage():Promise<Package[]> {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.packageUrl)
            .toPromise()
            .then(
                response => response.json() as Package[]
            )
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
