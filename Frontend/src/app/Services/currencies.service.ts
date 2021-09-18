import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrency } from '../interfaces/ICurrency';
import { ViewModel } from '../interfaces/ViewModel';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http : HttpClient,private myViewMode : ViewModel) { }

  ApiUrl = this.myViewMode.ViewModelObject.ApiUrl +"/Currency/" ;

  getAllCurrencies() : Observable<ICurrency[]>{
    return this.http.get<ICurrency[]>(this.ApiUrl);
}

 AddNewCurrency(Currency : ICurrency) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.ApiUrl,Currency);
}

DeleteCurrency(id : number){
  let url = this.ApiUrl+id;
  //console.log(url);
  return this.http.delete(url);
}

GetCurrencyBYID(id : number){
  let url = this.ApiUrl+id;
  return this.http.get(url);
}

EditCurrency(Currency : ICurrency){
    return this.http.put(this.ApiUrl,Currency);
}

}
