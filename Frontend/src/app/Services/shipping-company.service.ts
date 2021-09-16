import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IShippingCompany } from '../interfaces/IShippingCompany';

@Injectable({
  providedIn: 'root'
})
export class ShippingCompanyService {

  constructor(private http : HttpClient) { }

  getAllItems() : Observable<IShippingCompany[]>{
    return this.http.get<IShippingCompany[]>('https://localhost:44305/api/shippingcompany/');
}

 AddNewItem(item : IShippingCompany) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('https://localhost:44305/api/shippingcompany',item);
}

DeleteItem(id : number){
  let url = 'https://localhost:44305/api/shippingcompany/'+id;
  //console.log(url);
  return this.http.delete(url);
}

GetItemBYID(id : number){
  let url = 'https://localhost:44305/api/shippingcompany/'+id;
  return this.http.get(url);
}

EditItem(item : IShippingCompany){
    return this.http.put('https://localhost:44305/api/shippingcompany',item);
}
}
