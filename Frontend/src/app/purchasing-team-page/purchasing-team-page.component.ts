/*
Item here represent the type of the object of the current page
Item here == Purchasing Team Object
*/
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteShipmentComponent } from '../delete-shipment/delete-shipment.component';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { IPurchasingTeam } from '../interfaces/IPurchasingTeam';
import { PurchasingTeamService } from '../Services/purchasing-team.service';


@Component({
  selector: 'app-purchasing-team-page',
  templateUrl: './purchasing-team-page.component.html',
  styleUrls: ['./purchasing-team-page.component.scss']
})
export class PurchasingTeamPageComponent implements OnInit {

  constructor(private myService : PurchasingTeamService,public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  TableView : string = 'PurchasingTeamData';
  ViewData : any  ;
  ColumnName: string = 'PurchasingTeamColumn';

  Item:IPurchasingTeam ={};

  ngOnInit(): void {
    this.getAllItems();
  }

  AddNewItem(item:IPurchasingTeam){
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

  EditItem(item:IPurchasingTeam){
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
      this._snackBar.open("There is No Purchasing Teams Yet ❌","",{
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
      title:"Purchasing Team",
      purcMemId: this.Item.purcMemId,
      purcMemName:this.Item.purcMemName,
      EditOrAdd: EditOrAdd , 
      DataDB:"PurchasingTeamDataDB" ,DataDBNames:"PurchasingTeamDataDBNames"}
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
    this.openDialogDelete(event.purcMemId,event.purcMemName);
  }


  openDialogDelete(id:number,Name:string): void {
    const dialogRef = this.dialog.open(DeleteShipmentComponent, {
      data:{ID:"Purchasing Team",name:Name}
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
