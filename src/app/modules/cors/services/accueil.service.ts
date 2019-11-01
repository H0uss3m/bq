import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable()
export class AccueilService {

  endPoint = environment.endPoint;
  
  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
    
      errorMessage = `Error: ${error.error.message}`;
    } else {
      
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getMatrices() {
    return this.httpClient.get(this.endPoint + '/api/v1/modele/getAllMatrices')
    // .pipe(retry(3), catchError(this.handleError));
  }

  getModeles() {
    return this.httpClient.get(this.endPoint + '/api/v1/modele/getAllModeles')
    // .pipe(retry(3), catchError(this.handleError));
  }
  getHistorique() {
    return this.httpClient.get(this.endPoint + '/api/v1/modele/recementConsulter')
    // .pipe(retry(3), catchError(this.handleError));
  }


  
}
