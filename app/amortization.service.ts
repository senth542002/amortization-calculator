import { Injectable } from '@angular/core';
import  { Http, Response, Headers } from '@angular/http';
import { AmortizationSchedule } from './amortization-schedule';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AmortizationService{
  getData: string;
  constructor(private http: Http) { }

  fetchAmortizationSchedule(loanAmount: number, loanTerm: number, loanInterestRate: number): Observable<AmortizationSchedule[]>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://amortizationservice.cfapps.io/loan/?principle=4300000&interest=9.5&term=240',{headers: headers})
   .map((r: Response) => r.json().data as AmortizationSchedule[]);
  }

  private handleError(error: any) {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}
}
