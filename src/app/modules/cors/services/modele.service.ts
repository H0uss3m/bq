import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ModeleService {
  
  endPoint =  environment.endPoint37;
  constructor(private httpClient:HttpClient) { }
  getByIdModeleById(data){
    return this.httpClient.post(this.endPoint + '/api/v1/modeles ',data)
  }
}
