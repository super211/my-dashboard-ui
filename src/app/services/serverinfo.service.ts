import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../../app/app.settings';
import { Serverinfo, EnvHomeView } from '../models/index';
import { environment } from '../../environments/environment';

@Injectable()
export class ServerinfoService {

private apiUrl:string;
private homeApiUrl:string;

  constructor(private http: Http) {
    //API is behind proxy on prod. env.
    this.apiUrl=  (environment.env=='dev') ?  AppSettings.API_ENDPOINT+'serverinfo' : AppSettings.API_ENDPOINT+'serverinfo/serverinfo';
    this.homeApiUrl=  (environment.env=='dev') ?  AppSettings.API_ENDPOINT+'home' : AppSettings.API_ENDPOINT+'serverinfo/home';
    //console.log(this.apiUrl);
   }

getAll(): Promise<Serverinfo[]> {
  return this.http.get(this.apiUrl)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
}

getEnvSummary(): Promise<EnvHomeView> {
  return this.http.get(this.homeApiUrl)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
}

getEnvCatDetails(envCat:string): Promise<Serverinfo[]> {
  return this.http.get(this.homeApiUrl+'/'+envCat)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
}

getServerinfos(): Observable<Serverinfo[]>{
  return this.http.get(this.apiUrl).map((res: Response) => res.json())
  .catch(this.handleError);
  //.catch((error: any) => Observable.throw(error.json() || 'Server error'));;
}

updateServerinfo(id:string, serverinfo:Serverinfo){
   let body = JSON.stringify(serverinfo);
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions();
   options.headers = headers;
    return this.http.put(this.apiUrl+'/'+id,body, options).map((res:Response)=>res);
}

addServerinfo(serverinfo:Serverinfo){
    return this.http.post(this.apiUrl,JSON.stringify(serverinfo)).map((res:Response)=>res);
}

deleteServerinfo(id:string){
   return this.http.delete(this.apiUrl+'/'+id).map((res:Response)=>res);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
