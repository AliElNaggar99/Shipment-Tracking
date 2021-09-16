import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteShipmentComponent } from '../delete-shipment/delete-shipment.component';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { IBroker } from '../interfaces/IBroker';
import { BrokersService } from '../Services/brokers.service';

@Component({
  selector: 'app-clear-borkers',
  templateUrl: './clear-borkers.component.html',
  styleUrls: ['./clear-borkers.component.scss']
})
export class ClearBorkersComponent implements OnInit {

  constructor(private myBrokerService : BrokersService,public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  TableView : string = 'brokerData';
  ViewData : any  ;
  ColumnName: string = 'brokerColumn';

  Broker:IBroker ={};
 

  ngOnInit(): void {
    this.getAllBrokers();
  }

  AddNewBroker(Broker:IBroker){
    this.myBrokerService.AddNewBroker(Broker).subscribe((res: any)=>{
      this.getAllBrokers();
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
      this.Broker = {};

    });
  }

  EditBroker(Broker:IBroker){
    this.myBrokerService.EditBroker(Broker).subscribe((res: any)=>{
      this.getAllBrokers();
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
      this.Broker = {};
    });
  }

  getAllBrokers(){
    this.myBrokerService.getAllBrokers().subscribe(res=>{
      this.ViewData = res;
      console.log(this.ViewData);
    },error =>{
      this._snackBar.open("There is No Brokers Yet ❌","",{
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    });
  }

  EditBrokerEvent(event:any){
    this.Broker = event;
    this.openDialog('Edit');
  }

  openDialog(EditOrAdd:string){
    const dialogRef = this.dialog.open(InputDialogComponent, {
      data: {title:"Clearance Brokers",porkerId: this.Broker.porkerId,
      prokerName:this.Broker.prokerName,
      EditOrAdd: EditOrAdd ,
      DataDB:"brokerDataDB" ,DataDBNames:"brokerDataDBNames"}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(EditOrAdd == "Add" && result != undefined){
        this.Broker = result;
        console.log(this.Broker);
        this.AddNewBroker(this.Broker);
      }
      else if(EditOrAdd == "Edit" && result != undefined)
      {
        this.Broker = result;
        console.log(this.Broker);
        this.EditBroker(this.Broker);
      }
      else
      {
        this.Broker = {};
      }
    });

  }

  DeleteBrokerEvent(event:any){
    this.openDialogDelete(event.porkerId,event.prokerName);
  }


  openDialogDelete(id:number,Name:string): void {
    const dialogRef = this.dialog.open(DeleteShipmentComponent, {
      data:{ID:"Clearance Broker",name:Name}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result)
        this.DeleteBroker(id);
    });
  }

  DeleteBroker(id:number){
    this.myBrokerService.DeleteBroker(id).subscribe(res=>{
      this.getAllBrokers();
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
