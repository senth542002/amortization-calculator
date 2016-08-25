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

  fetchAmortizationSchedule(loanAmount: number, loanTerm: number, loanInterest: number): Promise<AmortizationSchedule[]>{

    // let headers = new Headers();
    // headers.append('Access-Control-Allow-Origin','*')
    // headers.append('Content-Type','application/json; charset=utf-8');
    // ,{headers: headers}

    return this.http.get('http://amortizationservice.cfapps.io/loan/?principle=4300000&interest=9.5&term=240')
    .toPromise()
    .then(response =>  response.json() as AmortizationSchedule[])
    .catch(this.handleError);
  }

  private handleError(error: any){
  return Promise.reject(error.message || error);
}
}
