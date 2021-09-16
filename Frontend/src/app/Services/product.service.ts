import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  getAllProducts() : Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://localhost:44305/api/product/');
}

 AddNewProduct(product : IProduct) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('https://localhost:44305/api/product',product);
}

DeleteProduct(id : number){
  let url = 'https://localhost:44305/api/product/'+id;
  //console.log(url);
  return this.http.delete(url);
}

GetProductBYID(id : number){
  let url = 'https://localhost:44305/api/product/'+id;
  return this.http.get(url);
}

EditProduct(product : IProduct){
    return this.http.put('https://localhost:44305/api/product',product);
}
}
