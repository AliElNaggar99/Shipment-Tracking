import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatus } from '../interfaces/IStatus';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http : HttpClient) { }
  getAllItems() : Observable<IStatus[]>{
    return this.http.get<IStatus[]>('https://localhost:44305/api/status/');
}

 AddNewItem(item : IStatus) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('https://localhost:44305/api/status',item);
}

DeleteItem(id : number){
  let url = 'https://localhost:44305/api/status/'+id;
  //console.log(url);
  return this.http.delete(url);
}

GetItemBYID(id : number){
  let url = 'https://localhost:44305/api/status/'+id;
  return this.http.get(url);
}

EditItem(item : IStatus){
    return this.http.put('https://localhost:44305/api/status',item);
}
}
