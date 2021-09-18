import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { IShipment } from '../interfaces/IShipment';
import { IShipmentDB } from '../interfaces/IShipmentDB';
import { ViewModel } from '../interfaces/ViewModel';


@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(private http : HttpClient ,private myViewMode : ViewModel) { }

  ApiUrl = this.myViewMode.ViewModelObject.ApiUrl +"/shipments/" ;
  
  getAllShipmentsId() : Observable<number[]>{
    let url = this.ApiUrl+"id";
    return this.http.get<number[]>(url);
}

  getAllShipments() : Observable<IShipment[]>{
      return this.http.get<IShipment[]>(this.ApiUrl);
  }

  AddNewShipment(Shipment : IShipmentDB) : any{
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.post(this.ApiUrl,JSON.stringify(Shipment),{ headers: headers });
  }
  
  DeleteShipment(id : number){
    let url = this.ApiUrl+id;
    console.log(url);
    return this.http.delete(url);
  }

  GetShipmentBYID(id : number){
    let url = this.ApiUrl+id;
    return this.http.get(url);
  }

  EditShipmet(Shipment : IShipmentDB){
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.put(this.ApiUrl,JSON.stringify(Shipment),{ headers: headers });
  }


}
