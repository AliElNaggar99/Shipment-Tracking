import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IShipmentProducts } from '../interfaces/IShipmentProduct';

@Injectable({
  providedIn: 'root'
})
export class ShipmentProductsService {

  constructor(private http : HttpClient) { }

  getAllShipmentProducts() : Observable<IShipmentProducts[]>{
    return this.http.get<IShipmentProducts[]>('https://localhost:44305/api/shipmentproducts/');
}

 AddNewShipmentProducts(shipmentproducts : IShipmentProducts) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('https://localhost:44305/api/shipmentproducts',shipmentproducts);
}

DeleteShipmentProducts(shipmentproducts : IShipmentProducts){
  let url = 'https://localhost:44305/api/shipmentproducts/';
  //console.log(url);
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    body: shipmentproducts,
  };
  return this.http.delete(url,options);
}

GetShipmentProductsBYID(id : number){
  let url = 'https://localhost:44305/api/shipmentproducts/'+id;
  return this.http.get(url);
}

EditShipmentProducts(shipmentproducts : IShipmentProducts){
    return this.http.put('https://localhost:44305/api/shipmentproducts',shipmentproducts);
}

}
