import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPurchasingTeam } from '../interfaces/IPurchasingTeam';

@Injectable({
  providedIn: 'root'
})
export class PurchasingTeamService {

  constructor(private http : HttpClient) { }

  getAllItems() : Observable<IPurchasingTeam[]>{
    return this.http.get<IPurchasingTeam[]>('https://localhost:44305/api/purchasingteam/');
}

 AddNewItem(item : IPurchasingTeam) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('https://localhost:44305/api/purchasingteam',item);
}

DeleteItem(id : number){
  let url = 'https://localhost:44305/api/purchasingteam/'+id;
  //console.log(url);
  return this.http.delete(url);
}

GetItemBYID(id : number){
  let url = 'https://localhost:44305/api/purchasingteam/'+id;
  return this.http.get(url);
}

EditItem(item : IPurchasingTeam){
    return this.http.put('https://localhost:44305/api/purchasingteam',item);
}
}
