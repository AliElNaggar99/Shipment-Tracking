import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatus } from '../interfaces/IStatus';
import { ViewModel } from '../interfaces/ViewModel';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http : HttpClient,private myViewMode : ViewModel) { }
  ApiUrl = this.myViewMode.ViewModelObject.ApiUrl +"/status/" ;

  getAllItems() : Observable<IStatus[]>{
    return this.http.get<IStatus[]>(this.ApiUrl);
}

 AddNewItem(item : IStatus) : any{
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

EditItem(item : IStatus){
    return this.http.put(this.ApiUrl,item);
}
}
