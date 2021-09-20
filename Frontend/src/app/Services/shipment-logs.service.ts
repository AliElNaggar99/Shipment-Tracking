import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IShipmentLogs } from '../interfaces/IShipmentLogs';
import { ViewModel } from '../interfaces/ViewModel';

@Injectable({
  providedIn: 'root'
})
export class ShipmentLogsService {

  constructor(private http : HttpClient,private myViewMode : ViewModel) { }
  ApiUrl = this.myViewMode.ViewModelObject.ApiUrl +"/shipmentlogs/" ;

  getAllShipmentLogs() : Observable<IShipmentLogs[]>{
    return this.http.get<IShipmentLogs[]>(this.ApiUrl);
}

 AddNewShipmentLogs(shipmentlog : IShipmentLogs) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.ApiUrl,shipmentlog);
}

DeleteShipmentLogs(id : number){
  let url = this.ApiUrl+id;
  return this.http.delete(url);
}

GetShipmentLogBYID(id : number){
  let url = this.ApiUrl+id;
  return this.http.get(url);
}

EditShipmentLogs(shipmentlog : IShipmentLogs){
    return this.http.put(this.ApiUrl,shipmentlog);
}
}
