import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPort } from '../interfaces/IPort';
import { ViewModel } from '../interfaces/ViewModel';

@Injectable({
  providedIn: 'root'
})
export class PortService {

  constructor(private http : HttpClient,private myViewMode : ViewModel) { }

  ApiUrl = this.myViewMode.ViewModelObject.ApiUrl +"/port/" ;

  getAllPorts() : Observable<IPort[]>{
    return this.http.get<IPort[]>(this.ApiUrl);
}

 AddNewPort(item : IPort) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.ApiUrl,item);
}

DeletePort(id : number){
  let url = this.ApiUrl+id;
  //console.log(url);
  return this.http.delete(url);
}

GetPortBYID(id : number){
  let url = this.ApiUrl+id;
  return this.http.get(url);
}

EditPort(item : IPort){
    return this.http.put(this.ApiUrl,item);
}
}
