import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPurchasingTeam } from '../interfaces/IPurchasingTeam';
import { ViewModel } from '../interfaces/ViewModel';

@Injectable({
  providedIn: 'root'
})
export class PurchasingTeamService {

  constructor(private http : HttpClient,private myViewMode : ViewModel) { }

  ApiUrl = this.myViewMode.ViewModelObject.ApiUrl +"/purchasingteam/" ;

  getAllItems() : Observable<IPurchasingTeam[]>{
    return this.http.get<IPurchasingTeam[]>(this.ApiUrl);
}

 AddNewItem(item : IPurchasingTeam) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.ApiUrl,item);
}

DeleteItem(id : number){
  let url = this.ApiUrl+id;
  //console.log(url);
  return this.http.delete(url);
}

GetItemBYID(id : number){
  let url = this.ApiUrl+id;
  return this.http.get(url);
}

EditItem(item : IPurchasingTeam){
    return this.http.put(this.ApiUrl,item);
}
}
