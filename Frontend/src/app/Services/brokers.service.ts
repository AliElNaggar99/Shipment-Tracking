import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBroker } from '../interfaces/IBroker';

@Injectable({
  providedIn: 'root'
})
export class BrokersService {

  constructor(private http : HttpClient) { }

  getAllBrokers() : Observable<IBroker[]>{
      return this.http.get<IBroker[]>('https://localhost:44305/api/clearporker/');
  }
  
   AddNewBroker(broker : IBroker) : any{
     // let headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.post('https://localhost:44305/api/clearporker',broker);
  }
  
  DeleteBroker(id : number){
    let url = 'https://localhost:44305/api/clearporker/'+id;
    //console.log(url);
    return this.http.delete(url);
  }
  
  GetBrokerBYID(id : number){
    let url = 'https://localhost:44305/api/clearporker/'+id;
    return this.http.get(url);
  }
  
  EditBroker(broker : IBroker){
      return this.http.put('https://localhost:44305/api/clearporker',broker);
  }

}
  