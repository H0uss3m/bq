import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class MatriceService {

  endPoint =  environment.endPoint37;
  constructor(private httpClient:HttpClient) {}

  getByIdMatrice(id,body){
    return this.httpClient.post(this.endPoint + '/api/v1/matrices/'+id, body)
  }
}
