import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ISupplier} from  '../interfaces/ISupplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http : HttpClient ) { }

  getAllSuppliers() : Observable<ISupplier[]>{
    return this.http.get<ISupplier[]>('https://localhost:44305/api/supplier/');
}

 AddNewSupplier(supplier : ISupplier) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('https://localhost:44305/api/supplier',supplier);
}

DeleteSupplier(id : number){
  let url = 'https://localhost:44305/api/supplier/'+id;
  //console.log(url);
  return this.http.delete(url);
}

GetSupplierBYID(id : number){
  let url = 'https://localhost:44305/api/supplier/'+id;
  return this.http.get(url);
}

EditSupplier(supplier : ISupplier){
    return this.http.put('https://localhost:44305/api/supplier',supplier);
}

}
