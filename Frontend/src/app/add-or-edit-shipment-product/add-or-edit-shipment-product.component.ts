import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewModel } from '../interfaces/ViewModel';
import { ProductService } from '../Services/product.service';
import { ShipmentProductsService } from '../Services/shipment-products.service';

@Component({
  selector: 'app-add-or-edit-shipment-product',
  templateUrl: './add-or-edit-shipment-product.component.html',
  styleUrls: ['./add-or-edit-shipment-product.component.scss']
})
export class AddOrEditShipmentProductComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddOrEditShipmentProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private ShipmentProductService:ShipmentProductsService) { }


    Products:any=[];
    Shipment:any=[];


  ngOnInit(): void {
    if(this.data.quantity === undefined)
    {
      this.data.quantity=0;
    }
    this.data.ProductsList.subscribe((res: any)=>{
    this.Products = res;
    if(this.data.Called != "ShipmentProductPage")
    {
      this.Products = this.Products.filter((Product: { prodId: any; }) =>{
        return !(this.data.currentList.some((current: { prodId: any; }) => {return current.prodId == Product.prodId }))});
      }
    }
    )
    if(this.data.Called == "ShipmentProductPage"){
      this.data.ShipmentList.subscribe((res: any)=>{
        this.Shipment = res;
      })
    }
 
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

  ChangeShipment(event:any){
    this.data.shipmentId = event;
    this.ShipmentProductService.GetShipmentProductsBYID(this.data.shipmentId).subscribe(res=>{
      this.data.currentList = res;
      this.Products = this.Products.filter((Product: { prodId: any; }) =>{
        return !(this.data.currentList.some((current: { prodId: any, shipmentId: any; }) => {return current.prodId == Product.prodId}))});
      console.log(this.data.currentList)
    },err =>{
      //Error means empty list
      this.data.currentList=[];
      this.data.ProductsList.subscribe((res: any)=>{
        this.Products = res;
      });
    })
  }

}
