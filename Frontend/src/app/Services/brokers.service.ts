import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBroker } from '../interfaces/IBroker';
import { ViewModel } from '../interfaces/ViewModel';

@Injectable({
  providedIn: 'root'
})
export class BrokersService {

  constructor(private http : HttpClient,private myViewMode : ViewModel) { }

  ApiUrl = this.myViewMode.ViewModelObject.ApiUrl +"/clearporker/" ;

  getAllBrokers() : Observable<IBroker[]>{
      return this.http.get<IBroker[]>(this.ApiUrl);
  }
  
   AddNewBroker(broker : IBroker) : any{
     // let headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.post(this.ApiUrl,broker);
  }
  
  DeleteBroker(id : number){
    let url = this.ApiUrl+id;
    //console.log(url);
    return this.http.delete(url);
  }
  
  GetBrokerBYID(id : number){
    let url = this.ApiUrl+id;
    return this.http.get(url);
  }
  
  EditBroker(broker : IBroker){
      return this.http.put(this.ApiUrl,broker);
  }

}
  