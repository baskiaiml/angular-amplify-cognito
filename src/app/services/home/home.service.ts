import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestApiService } from '../api/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private restApiService: RestApiService) { }

  fetch(){
    return this.restApiService.get('example', null, {observe: 'response'});
  }

}