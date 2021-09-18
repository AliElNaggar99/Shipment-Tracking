import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStorage } from '../interfaces/IStorage';
import { ViewModel } from '../interfaces/ViewModel';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor(private http : HttpClient,private myViewMode : ViewModel) { }
  ApiUrl = this.myViewMode.ViewModelObject.ApiUrl +"/storage/" ;

  getAllStorages() : Observable<IStorage[]>{
    return this.http.get<IStorage[]>(this.ApiUrl);
}

 AddNewStorage(storage : IStorage) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.ApiUrl,storage);
}

DeleteStorage(id : number){
  let url = this.ApiUrl+id;
  //console.log(url);
  return this.http.delete(url);
}

GetStorageBYID(id : number){
  let url = this.ApiUrl+id;
  return this.http.get(url);
}

EditStorage(storage : IStorage){
    return this.http.put(this.ApiUrl,storage);
}

}
