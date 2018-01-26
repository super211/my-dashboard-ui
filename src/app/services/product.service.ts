import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Product} from "../models/index";

@Injectable()
export class ProductService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private productsUrl = 'app/products';

    constructor(private http:Http) {
    }

    getProduct():Promise<Product[]> {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.productsUrl)
            .toPromise()
            .then(response => response.json().data as Product[])
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
