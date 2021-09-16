import { Component, OnInit } from '@angular/core';
import { IShipment } from '../interfaces/IShipment';
import { ShipmentService } from '../Services/shipment.service';
import  {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddShipmentPageComponent } from '../add-shipment-page/add-shipment-page.component';
import { IShipmentDB } from '../interfaces/IShipmentDB';
import {ViewModel} from '../interfaces/ViewModel';
import { DeleteShipmentComponent } from '../delete-shipment/delete-shipment.component';
import { SupplierService } from '../Services/supplier.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewShipmentProductsComponent } from '../view-shipment-products/view-shipment-products.component';
import { BrokersService } from '../Services/brokers.service';
import { CurrenciesService } from '../Services/currencies.service';
import { StorageServiceService } from '../Services/storage-service.service';
import { PortService } from '../Services/port.service';
import { StatusService } from '../Services/status.service';
import { ShippingCompanyService } from '../Services/shipping-company.service';
import { PurchasingTeamService } from '../Services/purchasing-team.service';


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
  constructor(private ShipmentServices : ShipmentService,public dialog: MatDialog,private SupplierServices:SupplierService,private _snackBar: MatSnackBar
    ,private myBroker:BrokersService,private myCurrencies:CurrenciesService,private myStorages:StorageServiceService,private myPort:PortService
    ,private myStatus:StatusService,private myShippingCompany:ShippingCompanyService,private myPurchasingTeam:PurchasingTeamService) { }


  ngOnInit(): void {
   this.getAllShipments();
  }

  getAllShipments(){
    this.ShipmentServices.getAllShipments().subscribe(res=>{
      this.ViewData = res;
      console.log(this.ViewData);
    },error =>{
      this._snackBar.open("There is No Shipments Yet ❌","",{
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    });
  }

  AddNewShipments(shipment:IShipmentDB){
    this.ShipmentServices.AddNewShipment(shipment).subscribe((res: any)=>{
      this.getAllShipments();
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
      this.ShipmentToAdd = {};
    });
  }

  EditShipment(shipment:IShipmentDB){
    this.ShipmentServices.EditShipmet(shipment).subscribe((res: any)=>{
      this.getAllShipments();
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
      data: {shipmentId: this.ShipmentToAdd.shipmentId,
        supplierId : this.ShipmentToAdd.supplierId,
        porkerId: this.ShipmentToAdd.porkerId,
        currencyId: this.ShipmentToAdd.currencyId,
        storageId: this.ShipmentToAdd.storageId,
        portId: this.ShipmentToAdd.portId,
        currentStatusId: this.ShipmentToAdd.currentStatusId,
        shippingCompanyId: this.ShipmentToAdd.shippingCompanyId,
        purchTeamId: this.ShipmentToAdd.purchTeamId,
        wayOfTransport: this.ShipmentToAdd.wayOfTransport,
        taxes: this.ShipmentToAdd.taxes,
        fines: this.ShipmentToAdd.fines,
        taxesCurrencyId: this.ShipmentToAdd.taxesCurrencyId,
        estimatedDeliveryDate: this.ShipmentToAdd.estimatedDeliveryDate,
        actualDeliveryDate: this.ShipmentToAdd.actualDeliveryDate,
        EditOrAdd: EditOrAdd,
        SupplierList:this.SupplierServices.getAllSuppliers(),
        BrokerList:this.myBroker.getAllBrokers(),
        CurrencyList:this.myCurrencies.getAllCurrencies(),
        StoragesList:this.myStorages.getAllStorages(),
        PortsList:this.myPort.getAllPorts(),
        StatusList:this.myStatus.getAllItems(),
        ShippingCompanyList:this.myShippingCompany.getAllItems(),
        PurchasingTeamList:this.myPurchasingTeam.getAllItems(),

      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(EditOrAdd == "Add" && result != undefined){
        result.SupplierList=[];
        result.BrokerList=[];
        result.CurrencyList=[];
        result.StoragesList=[];
        result.PortsList=[];
        result.StatusList=[];
        result.ShippingCompanyList=[];
        result.PurchasingTeamList=[];
        this.ShipmentToAdd = result;
        this.ShipmentToAdd.estimatedDeliveryDate = result.estimatedDeliveryDate.value.toLocaleDateString();
        this.ShipmentToAdd.actualDeliveryDate = result.actualDeliveryDate.value.toLocaleDateString();
        console.log(this.ShipmentToAdd);
        this.AddNewShipments(this.ShipmentToAdd);
      }
      else if(EditOrAdd == "Edit" && result != undefined)
      {
        result.SupplierList=[];
        result.BrokerList=[];
        result.CurrencyList=[];
        result.StoragesList=[];
        result.PortsList=[];
        result.StatusList=[];
        result.ShippingCompanyList=[];
        result.PurchasingTeamList=[];
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

  openDialogDelete(id:number): void {
    const dialogRef = this.dialog.open(DeleteShipmentComponent, {
      data:{ID:id,name:"Shipment"}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result)
        this.DeleteShipment(id);
    });
  }

  ViewShipmentProduct(shipment:any){
  console.log(shipment);
  const dialogRef = this.dialog.open(ViewShipmentProductsComponent, {
    data:{ID:shipment.shipmentId , ShipmentData:shipment}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
  });
  }

}
