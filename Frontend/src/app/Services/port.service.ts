import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPort } from '../interfaces/IPort';

@Injectable({
  providedIn: 'root'
})
export class PortService {

  constructor(private http : HttpClient) { }

  getAllPorts() : Observable<IPort[]>{
    return this.http.get<IPort[]>('https://localhost:44305/api/port/');
}

 AddNewPort(item : IPort) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('https://localhost:44305/api/port',item);
}

DeletePort(id : number){
  let url = 'https://localhost:44305/api/port/'+id;
  //console.log(url);
  return this.http.delete(url);
}

GetPortBYID(id : number){
  let url = 'https://localhost:44305/api/port/'+id;
  return this.http.get(url);
}

EditPort(item : IPort){
    return this.http.put('https://localhost:44305/api/port',item);
}
}
