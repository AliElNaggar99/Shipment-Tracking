import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteShipmentComponent } from '../delete-shipment/delete-shipment.component';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { IPort } from '../interfaces/IPort';
import { PortService } from '../Services/port.service';

@Component({
  selector: 'app-port-page',
  templateUrl: './port-page.component.html',
  styleUrls: ['./port-page.component.scss']
})
export class PortPageComponent implements OnInit {

  constructor(private myPortService : PortService,public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  TableView : string = 'portData';
  ViewData : any  ;
  ColumnName: string = 'portColumn';

  Port:IPort ={};
 

  ngOnInit(): void {
    this.getAllPorts();
  }

  AddNewPort(port:IPort){
    this.myPortService.AddNewPort(port).subscribe((res: any)=>{
      this.getAllPorts();
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
      this.Port = {};

    });
  }

  EditPort(port:IPort){
    this.myPortService.EditPort(port).subscribe((res: any)=>{
      this.getAllPorts();
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
      this.Port = {};
    });
  }

  getAllPorts(){
    this.myPortService.getAllPorts().subscribe(res=>{
      this.ViewData = res;
      console.log(this.ViewData);
    },error =>{
      this._snackBar.open("There is No Ports Yet ❌","",{
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    });
  }

  EditPortEvent(event:any){
    this.Port = event;
    this.openDialog('Edit');
  }

  openDialog(EditOrAdd:string){
    const dialogRef = this.dialog.open(InputDialogComponent, {
      data: {title:"Port",
      portId: this.Port.portId,
      portName:this.Port.portName,
      EditOrAdd: EditOrAdd , 
      DataDB:"portDataDB" ,DataDBNames:"portDataDBNames"}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(EditOrAdd == "Add" && result != undefined){
        this.Port = result;
        console.log(this.Port);
        this.AddNewPort(this.Port);
      }
      else if(EditOrAdd == "Edit" && result != undefined)
      {
        this.Port = result;
        console.log(this.Port);
        this.EditPort(this.Port);
      }
      else
      {
        this.Port = {};
      }
    });

  }

  DeletePortEvent(event:any){
    this.openDialogDelete(event.portId,event.portName);
  }


  openDialogDelete(id:number,Name:string): void {
    const dialogRef = this.dialog.open(DeleteShipmentComponent, {
      data:{ID:"Port",name:Name}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result)
        this.DeletePort(id);
    });
  }

  DeletePort(id:number){
    this.myPortService.DeletePort(id).subscribe(res=>{
      this.getAllPorts();
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
