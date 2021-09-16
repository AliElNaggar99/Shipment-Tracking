import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { IShipment } from '../interfaces/IShipment';
import { IShipmentDB } from '../interfaces/IShipmentDB';


@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(private http : HttpClient ) { }


  getAllShipmentsId() : Observable<number[]>{
    return this.http.get<number[]>('https://localhost:44305/api/shipments/id');
}

  getAllShipments() : Observable<IShipment[]>{
      return this.http.get<IShipment[]>('https://localhost:44305/api/shipments/');
  }

  AddNewShipment(Shipment : IShipmentDB) : any{
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.post('https://localhost:44305/api/shipments',JSON.stringify(Shipment),{ headers: headers });
  }
  
  DeleteShipment(id : number){
    let url = 'https://localhost:44305/api/shipments/'+id;
    console.log(url);
    return this.http.delete(url);
  }

  GetShipmentBYID(id : number){
    let url = 'https://localhost:44305/api/shipments/'+id;
    return this.http.get(url);
  }

  EditShipmet(Shipment : IShipmentDB){
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.put('https://localhost:44305/api/shipments',JSON.stringify(Shipment),{ headers: headers });
  }


}
