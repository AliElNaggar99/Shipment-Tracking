/*
Item here represent the type of the object of the current page
Item here == Status Object
*/
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteShipmentComponent } from '../delete-shipment/delete-shipment.component';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { IStatus } from '../interfaces/IStatus';
import { StatusService } from '../Services/status.service';

@Component({
  selector: 'app-statuspage',
  templateUrl: './statuspage.component.html',
  styleUrls: ['./statuspage.component.scss']
})
export class StatuspageComponent implements OnInit {

  constructor(private myService : StatusService,public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  TableView : string = 'statusData';
  ViewData : any  ;
  ColumnName: string = 'statusColumn';

  Item:IStatus ={};

  ngOnInit(): void {
    this.getAllItems();
  }

  AddNewItem(item:IStatus){
    this.myService.AddNewItem(item).subscribe((res: any)=>{
      this.getAllItems();
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
      this.Item = {};

    });
  }

  EditItem(item:IStatus){
    this.myService.EditItem(item).subscribe((res: any)=>{
      this.getAllItems();
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
      this.Item = {};
    });
  }

  getAllItems(){
    this.myService.getAllItems().subscribe(res=>{
      this.ViewData = res;
      console.log(this.ViewData);
    },error =>{
      this._snackBar.open("There is No Suppliers Yet ❌","",{
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    });
  }

  EditItemEvent(event:any){
    this.Item = event;
    this.openDialog('Edit');
  }

  openDialog(EditOrAdd:string){
    const dialogRef = this.dialog.open(InputDialogComponent, {
      data: {
      title:"Status",
      statusId: this.Item.statusId,
      statusName:this.Item.statusName,
      EditOrAdd: EditOrAdd , 
      DataDB:"statusDataDB" ,DataDBNames:"statusDataDBNames"}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(EditOrAdd == "Add" && result != undefined){
        this.Item = result;
        console.log(this.Item);
        this.AddNewItem(this.Item);
      }
      else if(EditOrAdd == "Edit" && result != undefined)
      {
        this.Item = result;
        console.log(this.Item);
        this.EditItem(this.Item);
      }
      else
      {
        this.Item = {};
      }
    });

  }

  DeleteItemEvent(event:any){
    this.openDialogDelete(event.statusId,event.statusName);
  }


  openDialogDelete(id:number,Name:string): void {
    const dialogRef = this.dialog.open(DeleteShipmentComponent, {
      data:{ID:"Status",name:Name}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result)
        this.DeleteItem(id);
    });
  }

  DeleteItem(id:number){
    this.myService.DeleteItem(id).subscribe(res=>{
      this.getAllItems();
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
