import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IShippingCompany } from '../interfaces/IShippingCompany';
import { ViewModel } from '../interfaces/ViewModel';

@Injectable({
  providedIn: 'root'
})
export class ShippingCompanyService {

  constructor(private http : HttpClient,private myViewMode : ViewModel) { }

  ApiUrl = this.myViewMode.ViewModelObject.ApiUrl +"/shippingcompany/" ;

  getAllItems() : Observable<IShippingCompany[]>{
    return this.http.get<IShippingCompany[]>(this.ApiUrl);
}

 AddNewItem(item : IShippingCompany) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.ApiUrl,item);
}

DeleteItem(id : number){
  let url = this.ApiUrl+id;
  //console.log(url);
  return this.http.delete(url);
}

GetItemBYID(id : number){
  let url = this.ApiUrl+id;
  return this.http.get(url);
}

EditItem(item : IShippingCompany){
    return this.http.put(this.ApiUrl,item);
}
}
