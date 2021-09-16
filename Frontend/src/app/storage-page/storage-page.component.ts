import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteShipmentComponent } from '../delete-shipment/delete-shipment.component';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { IStorage } from '../interfaces/IStorage';
import { StorageServiceService } from '../Services/storage-service.service';

@Component({
  selector: 'app-storage-page',
  templateUrl: './storage-page.component.html',
  styleUrls: ['./storage-page.component.scss']
})
export class StoragePageComponent implements OnInit {

  constructor(private myStorage : StorageServiceService,public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  TableView : string = 'storageData';
  ViewData : any  ;
  ColumnName: string = 'storageColumn';

  Storage:IStorage ={};


  ngOnInit(): void {
    this.getAllStorages();
  }

  AddNewStorage(storage:IStorage){
    this.myStorage.AddNewStorage(storage).subscribe((res: any)=>{
      this.getAllStorages();
      console.log(res);
      this._snackBar.open("Action was Done Successful! ✔️","",{
        duration: 3000,
        panelClass: ['snackbar-correctly']
      });
    },(err: any)=>{
        console.log(err)
        this._snackBar.open("Error, please Make Sure you entered everything correctly ❌","",{
          duration: 3000,
          panelClass: ['snackbar-error']
        });
      }).add(()=>{
      this.Storage = {};

    });
  }

  EditStorage(storage:IStorage){
    this.myStorage.EditStorage(storage).subscribe((res: any)=>{
      this.getAllStorages();
      console.log(res);
      this._snackBar.open("Action was Done Successful! ✔️","",{
        duration: 3000,
        panelClass: ['snackbar-correctly']
      });
    },(err: any)=>{
        console.log(err)
        this._snackBar.open("Error, please Make Sure you entered everything correctly ❌","",{
          duration: 3000,
          panelClass: ['snackbar-error']
        });
      }).add(()=>{
      this.Storage = {};
    });
  }

  getAllStorages(){
    this.myStorage.getAllStorages().subscribe(res=>{
      this.ViewData = res;
      console.log(this.ViewData);
    },error =>{
      this._snackBar.open("There is No Brokers Yet ❌","",{
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    });
  }

  EditStorageEvent(event:any){
    this.Storage = event;
    this.openDialog('Edit');
  }

  openDialog(EditOrAdd:string){
    const dialogRef = this.dialog.open(InputDialogComponent, {
      data: {title:"Storages",
      storageId: this.Storage.storageId,
      storageLocation:this.Storage.storageLocation,
      EditOrAdd: EditOrAdd ,
      DataDB:"storageDataDB" ,DataDBNames:"storageDataDBNames"}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(EditOrAdd == "Add" && result != undefined){
        this.Storage = result;
        console.log(this.Storage);
        this.AddNewStorage(this.Storage);
      }
      else if(EditOrAdd == "Edit" && result != undefined)
      {
        this.Storage = result;
        console.log(this.Storage);
        this.EditStorage(this.Storage);
      }
      else
      {
        this.Storage = {};
      }
    });

  }

  DeleteStorageEvent(event:any){
    this.openDialogDelete(event.storageId,event.storageLocation);
  }


  openDialogDelete(id:number,Name:string): void {
    const dialogRef = this.dialog.open(DeleteShipmentComponent, {
      data:{ID:"Storage",name:Name}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result)
        this.DeleteStorage(id);
    });
  }

  DeleteStorage(id:number){
    this.myStorage.DeleteStorage(id).subscribe(res=>{
      this.getAllStorages();
      console.log(res);
      this._snackBar.open("Action was Done Successful! ✔️","",{
        duration: 3000,
        panelClass: ['snackbar-correctly']
      });
    },(err: any)=>{
      console.log(err)
      this._snackBar.open("Error, please Make Sure you entered everything correctly ❌","",{
        duration: 3000,
        panelClass: ['snackbar-error']
      });
  })
}


}
