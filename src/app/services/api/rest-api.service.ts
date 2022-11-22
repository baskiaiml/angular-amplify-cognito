import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  backend_url: string =  environment.resourceServerURL; 
  token:any;

  constructor(public http: HttpClient) {
    this.token ="";
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        console.log("Get Request Params",params[k]);
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.backend_url + '/' + endpoint, {headers:{'Content-Type':'text/plain','Accept':'text/plain',
    'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT, OPTIONS',
     'Access-Control-Allow-Credentials':'true',
    // 'Access-Control-Allow-Headers':'Content-Type,Authorization',
     'Access-Control-Allow-Origin':'*'}});
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post<any>(this.backend_url + '/' + endpoint, body, /*{headers:{'Content-Type':'text/plain','Accept':'text/plain',
    'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT, OPTIONS',
     'Access-Control-Allow-Credentials':'true',
   //  'Access-Control-Allow-Headers':'Content-Type,Authorization',
     'Access-Control-Allow-Origin':'*'}}*/);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.backend_url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.backend_url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.backend_url + '/' + endpoint, body, reqOpts);
  }

}