import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrency } from '../interfaces/ICurrency';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http : HttpClient) { }

  getAllCurrencies() : Observable<ICurrency[]>{
    return this.http.get<ICurrency[]>('https://localhost:44305/api/Currency/');
}

 AddNewCurrency(Currency : ICurrency) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('https://localhost:44305/api/Currency',Currency);
}

DeleteCurrency(id : number){
  let url = 'https://localhost:44305/api/Currency/'+id;
  //console.log(url);
  return this.http.delete(url);
}

GetCurrencyBYID(id : number){
  let url = 'https://localhost:44305/api/Currency/'+id;
  return this.http.get(url);
}

EditCurrency(Currency : ICurrency){
    return this.http.put('https://localhost:44305/api/Currency',Currency);
}

}
