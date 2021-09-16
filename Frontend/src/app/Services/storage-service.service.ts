import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStorage } from '../interfaces/IStorage';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor(private http : HttpClient) { }
  getAllStorages() : Observable<IStorage[]>{
    return this.http.get<IStorage[]>('https://localhost:44305/api/storage/');
}

 AddNewStorage(storage : IStorage) : any{
   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('https://localhost:44305/api/storage',storage);
}

DeleteStorage(id : number){
  let url = 'https://localhost:44305/api/storage/'+id;
  //console.log(url);
  return this.http.delete(url);
}

GetStorageBYID(id : number){
  let url = 'https://localhost:44305/api/storage/'+id;
  return this.http.get(url);
}

EditStorage(storage : IStorage){
    return this.http.put('https://localhost:44305/api/storage',storage);
}

}
