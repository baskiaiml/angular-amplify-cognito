import { Injectable } from '@angular/core';
import { RestApiService } from '../api/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private restApiService: RestApiService) { }

  fetch(){
    return this.restApiService.get('api/admin/message', null, {observe: 'response'});
  }

}