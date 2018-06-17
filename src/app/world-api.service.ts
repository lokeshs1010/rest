import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class WorldApiService {
  constructor(public _http: HttpClient) {}

  public getRegions(region): Observable<any> {
    let myResponse = this._http.get(`https://restcountries.eu/rest/v2/region/${region}`);
    console.log(myResponse);
    return myResponse;
  }


  public getCountry(country): Observable<any> {
    let myResponse = this._http.get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
    console.log(myResponse);
    return myResponse;
  }


  currency(currency) {
    let myResponse = this._http.get(`https://restcountries.eu/rest/v2/currency/${currency}`);
    console.log(myResponse);
    return myResponse;
  }


  language(language) {
    let myResponse = this._http.get(`https://restcountries.eu/rest/v2/lang/${language}`);
    console.log(myResponse);
    return myResponse;
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
