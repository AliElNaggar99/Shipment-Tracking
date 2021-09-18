import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';
import { ViewModel } from '../interfaces/ViewModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient,private myViewMode : ViewModel) { }

  ApiUrl = this.myViewMode.ViewModelObject.ApiUrl +"/product/" ;
  getAllProducts() : Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.ApiUrl);
}

 AddNewProduct(product : IProduct) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.ApiUrl,product);
}

DeleteProduct(id : number){
  let url = this.ApiUrl+id;
  //console.log(url);
  return this.http.delete(url);
}

GetProductBYID(id : number){
  let url = this.ApiUrl+id;
  return this.http.get(url);
}

EditProduct(product : IProduct){
    return this.http.put(this.ApiUrl,product);
}
}
