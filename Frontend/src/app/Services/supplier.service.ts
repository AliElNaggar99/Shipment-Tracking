import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ISupplier} from  '../interfaces/ISupplier';
import { ViewModel } from '../interfaces/ViewModel';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http : HttpClient ,private myViewMode : ViewModel) { }

  ApiUrl = this.myViewMode.ViewModelObject.ApiUrl +"/supplier/" ;

  getAllSuppliers() : Observable<ISupplier[]>{
    return this.http.get<ISupplier[]>(this.ApiUrl);
}

 AddNewSupplier(supplier : ISupplier) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.ApiUrl,supplier);
}

DeleteSupplier(id : number){
  let url = this.ApiUrl+id;
  //console.log(url);
  return this.http.delete(url);
}

GetSupplierBYID(id : number){
  let url = this.ApiUrl+id;
  return this.http.get(url);
}

EditSupplier(supplier : ISupplier){
    return this.http.put(this.ApiUrl,supplier);
}

}
