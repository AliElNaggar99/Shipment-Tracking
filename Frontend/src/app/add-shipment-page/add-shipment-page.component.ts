import { Component, OnInit } from '@angular/core';
import  {Inject} from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IShipmentDB } from '../interfaces/IShipmentDB';
import { ViewModel } from '../interfaces/ViewModel';



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

    ShipmentAttrs = this.myViewModel.ViewModelObject.shipmentDataDB;
    ShipmentInputNames = this.myViewModel.ViewModelObject.shipmentDataDBNames;

    

  ngOnInit(): void {
    console.log(this.ShipmentAttrs)
   
  }

  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
