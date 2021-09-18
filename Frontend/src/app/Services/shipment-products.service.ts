import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IShipmentProducts } from '../interfaces/IShipmentProduct';
import { ViewModel } from '../interfaces/ViewModel';

@Injectable({
  providedIn: 'root'
})
export class ShipmentProductsService {

  constructor(private http : HttpClient,private myViewMode : ViewModel) { }

  ApiUrl = this.myViewMode.ViewModelObject.ApiUrl +"/shipmentproducts/" ;

  getAllShipmentProducts() : Observable<IShipmentProducts[]>{
    return this.http.get<IShipmentProducts[]>(this.ApiUrl);
}

 AddNewShipmentProducts(shipmentproducts : IShipmentProducts) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.ApiUrl,shipmentproducts);
}

DeleteShipmentProducts(shipmentproducts : IShipmentProducts){
  let url = this.ApiUrl;
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
  let url = this.ApiUrl+id;
  return this.http.get(url);
}

EditShipmentProducts(shipmentproducts : IShipmentProducts){
    return this.http.put(this.ApiUrl,shipmentproducts);
}

}
