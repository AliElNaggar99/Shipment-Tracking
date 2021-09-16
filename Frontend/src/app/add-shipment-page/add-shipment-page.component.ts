import { Component, OnInit } from '@angular/core';
import  {Inject} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IShipmentDB } from '../interfaces/IShipmentDB';
import { ViewModel } from '../interfaces/ViewModel';

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-add-shipment-page',
  templateUrl: './add-shipment-page.component.html',
  styleUrls: ['./add-shipment-page.component.scss'],
  providers:[ViewModel]
})
export class AddShipmentPageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddShipmentPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private myViewModel:ViewModel) {
      this.data.estimatedDeliveryDate = new FormControl(new Date(this.data.estimatedDeliveryDate));
      this.data.actualDeliveryDate = new FormControl(new Date(this.data.actualDeliveryDate));
    }

    ShipmentAttrs = this.myViewModel.ViewModelObject.shipmentDataDB.slice(9,12);
    ShipmentInputNames = this.myViewModel.ViewModelObject.shipmentDataDBNames.slice(9,12);
    myDropDownNames=this.myViewModel.ViewModelObject.DropDownMenuNames;

    ShipmentAttrsDrop = this.myViewModel.ViewModelObject.shipmentDataDB.slice(0,9);
    ShipmentInputNamesDrop = this.myViewModel.ViewModelObject.shipmentDataDBNames.slice(0,9);
    ListOfAllMenus:any=[[]]

  ngOnInit(): void {
    this.data.SupplierList.subscribe((res: any)=>{
      this.ListOfAllMenus[0]= res;
    })
    this.data.BrokerList.subscribe((res: any)=>{
      this.ListOfAllMenus[1]= res;
    })
    this.data.CurrencyList.subscribe((res: any)=>{
      this.ListOfAllMenus[2]= res;
    })
    this.data.StoragesList.subscribe((res: any)=>{
      this.ListOfAllMenus[3]= res;
    })
    this.data.PortsList.subscribe((res: any)=>{
      this.ListOfAllMenus[4]= res;
    })
    this.data.StatusList.subscribe((res: any)=>{
      this.ListOfAllMenus[5]= res;
    })
    this.data.ShippingCompanyList.subscribe((res: any)=>{
      this.ListOfAllMenus[6]= res;
    })
    this.data.PurchasingTeamList.subscribe((res: any)=>{
      this.ListOfAllMenus[7]= res;
    })
    this.data.CurrencyList.subscribe((res: any)=>{
      this.ListOfAllMenus[8]= res;
    })
  
  
  }

  
  onNoClick(): void {
    this.dialogRef.close();
  }

  UpdateID(event:any){
    this.data[event.attrName] = event.newID;
  }

}
