import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

@Injectable()
export class EnvironmentService {

  constructor(private http: Http) { }

  getAll(): Promise<any> {
    return this.http.get('api/environments')
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  

}
