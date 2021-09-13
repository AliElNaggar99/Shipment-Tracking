import { Component, OnInit } from '@angular/core';
import { IShipment } from '../interfaces/IShipment';
import { ShipmentService } from '../Services/shipment.service';
import  {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddShipmentPageComponent } from '../add-shipment-page/add-shipment-page.component';
import { IShipmentDB } from '../interfaces/IShipmentDB';
import {ViewModel} from '../interfaces/ViewModel';
import { DeleteShipmentComponent } from '../delete-shipment/delete-shipment.component';


@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})


export class ShipmentComponent implements OnInit {

  TableView : string = 'shipmentData';
  ViewData : any  ;
  ColumnName: string = 'shipmentColumn';

  ShipmentToAdd:IShipmentDB = {};
  constructor(private ShipmentServices : ShipmentService,public dialog: MatDialog) { }


  ngOnInit(): void {
   this.getAllShipments();
  }

  getAllShipments(){
    this.ShipmentServices.getAllShipments().subscribe(res=>{
      this.ViewData = res;
      console.log(this.ViewData);
    },error =>{
    });
  }

  AddNewShipments(shipment:IShipmentDB){
    this.ShipmentServices.AddNewShipment(shipment).subscribe((res: any)=>{
      this.getAllShipments();
      console.log(res);
    }).add(()=>{
      this.ShipmentToAdd = {};
    });
  }

  EditShipment(shipment:IShipmentDB){
    this.ShipmentServices.EditShipmet(shipment).subscribe((res: any)=>{
      this.getAllShipments();
      console.log(res);
    }).add(()=>{
      this.ShipmentToAdd = {};
    });
  }

  EditShipmentEvenet(event:any){
    this.ShipmentToAdd = event;
    this.openDialog('Edit');
  }
  DeleteShipmentEvent(event : any){
      this.openDialogDelete(event.shipmentId);
  }

  openDialog(EditOrAdd:string): void {
    console.log(this.ShipmentToAdd);
    const dialogRef = this.dialog.open(AddShipmentPageComponent, {
      width: '80%',height:'60%',
      data: {shipmentId: this.ShipmentToAdd.shipmentId,supplierId : this.ShipmentToAdd.supplierId,porkerId: this.ShipmentToAdd.porkerId,currencyId: this.ShipmentToAdd.currencyId,storageId: this.ShipmentToAdd.storageId,portId: this.ShipmentToAdd.portId,currentStatusId: this.ShipmentToAdd.currentStatusId,shippingCompanyId: this.ShipmentToAdd.shippingCompanyId,purchTeamId: this.ShipmentToAdd.purchTeamId,wayOfTransport: this.ShipmentToAdd.wayOfTransport,taxes: this.ShipmentToAdd.taxes,fines: this.ShipmentToAdd.fines,taxesCurrencyId: this.ShipmentToAdd.taxesCurrencyId,estimatedDeliveryDate: this.ShipmentToAdd.estimatedDeliveryDate,actualDeliveryDate: this.ShipmentToAdd.actualDeliveryDate,EditOrAdd: EditOrAdd}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(EditOrAdd == "Add" && result != undefined){
        this.ShipmentToAdd = result;
        console.log(this.ShipmentToAdd);
        this.AddNewShipments(this.ShipmentToAdd);
      }
      else if(EditOrAdd == "Edit" && result != undefined)
      {
        this.ShipmentToAdd = result;
        this.ShipmentToAdd.estimatedDeliveryDate = result.estimatedDeliveryDate.value.toLocaleDateString();
        this.ShipmentToAdd.actualDeliveryDate = result.actualDeliveryDate.value.toLocaleDateString();
        console.log(this.ShipmentToAdd);
        this.EditShipment(this.ShipmentToAdd);
      }
      else
      {
        this.ShipmentToAdd = {};
      }
    });
  }

  //Delete Shipment
  DeleteShipment(id : number)
  {
    this.ShipmentServices.DeleteShipment(id).subscribe(res=>{
      this.getAllShipments();
      console.log(res);
    })
  }

  openDialogDelete(id:number): void {
    const dialogRef = this.dialog.open(DeleteShipmentComponent, {
      width: '25%',height:'25%',
      data:{ID:id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result)
        this.DeleteShipment(id);
    });
  }

}
