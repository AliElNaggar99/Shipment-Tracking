import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewModel } from '../interfaces/ViewModel';

@Component({
  selector: 'app-add-or-edit-shipment-product',
  templateUrl: './add-or-edit-shipment-product.component.html',
  styleUrls: ['./add-or-edit-shipment-product.component.scss']
})
export class AddOrEditShipmentProductComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddOrEditShipmentProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


    Products:any=[];


  ngOnInit(): void {
    if(this.data.quantity === undefined)
    {
      this.data.quantity=0;
    }
    this.data.ProductsList.subscribe((res: any)=>{
    this.Products = res;
    this.Products = this.Products.filter((Product: { prodId: any; }) =>{
      return !(this.data.currentList.some((current: { prodId: any; }) => {return current.prodId == Product.prodId }))});
    })
 
  }


    
  onNoClick(): void {
    this.dialogRef.close();
  }

  UpdateID(event:any){
    console.log(event);
    this.data[event.attrName] = event.newID;
  }

  ChangeData(event:any){
    this.data.quantity = event;
    this.data.totalPrice = event * this.data.prodPrice;
  }

  ChangeProduct(event:any){
    console.log(this.data);
    this.data.prodId = event;
    let productPrice = this.Products.find((product: { [x: string]: any; })=>product['prodId'] === event);
    console.log(productPrice)
    this.data.prodPrice = productPrice!['prodPrice'];
    this.data.totalPrice = this.data.quantity * this.data.prodPrice;
  }

}
