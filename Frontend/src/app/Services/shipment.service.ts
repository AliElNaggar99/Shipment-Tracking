import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { IShipment } from '../interfaces/IShipment';


@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(private http : HttpClient ) { }

  getAllShipments() : Observable<IShipment[]>{
      return this.http.get<IShipment[]>('https://localhost:44305/api/shipments/');
  }
}
