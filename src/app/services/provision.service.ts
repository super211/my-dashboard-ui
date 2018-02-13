import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Rx';
import { CmdInfo } from '../models/index'

@Injectable()
export class ProvisionService {

  private baseUrl: String;

  constructor(private http: Http) {
    this.baseUrl = 'http://13.228.156.28';
  }
  submitProvision(data: CmdInfo): Observable<any> {
    // return this.http.post('http://13.228.156.28/jobdispatcher/package', 
    return this.http.post(this.baseUrl + '/jobdispatcher/home',
      data, this.getOptions()).map((response: Response) => response.json());
  }

  submitProvisionTap(data: any): Observable<any> {
    // return this.http.post('http://13.228.156.28/jobdispatcher/package', 
    return this.http.post(this.baseUrl + '/jobdispatcher/home',
      data, this.getOptions()).map((response: Response) => response.json());
  }

  submitProvisionTds(data: any): Observable<any> {
    // return this.http.post('http://13.228.156.28/jobdispatcher/package', 
    return this.http.post(this.baseUrl + '/jobdispatcher/home',
      data, this.getOptions()).map((response: Response) => response.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private getOptions(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions();
    options.headers = headers;
    return options;
  }
}
