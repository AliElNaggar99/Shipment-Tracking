import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteShipmentComponent } from '../delete-shipment/delete-shipment.component';
import { IShipmentProducts } from '../interfaces/IShipmentProduct';
import { ViewModel } from '../interfaces/ViewModel';
import { ShipmentProductsService } from '../Services/shipment-products.service';
import {AddOrEditShipmentProductComponent} from '../add-or-edit-shipment-product/add-or-edit-shipment-product.component'
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-view-shipment-products',
  templateUrl: './view-shipment-products.component.html',
  styleUrls: ['./view-shipment-products.component.scss'],
  providers:[ViewModel]
})
export class ViewShipmentProductsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewShipmentProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private myViewModel:ViewModel , private ShipmentProductsService:ShipmentProductsService,public dialog: MatDialog,
    private _snackBar: MatSnackBar,private ProductServices:ProductService) { }


  TableView : string = 'ShipmentProductsData';
  ViewData : any  ;
  ColumnName: string = 'ShipmentProductsColumn';
  ShipmentProduct:IShipmentProducts = {shipmentId:this.data.ID};

  ngOnInit(): void {
    this.getAllShipmentProducts(this.data.ID);
  }

  getAllShipmentProducts(id:number){
    this.ShipmentProductsService.GetShipmentProductsBYID(id).subscribe(res=>{
      this.ViewData = res;
      console.log(this.ViewData);
    },error =>{
      this._snackBar.open("This Shipment Don't have any Products yet ❌","",{
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    });
  }


  AddNewShipmentProducts(ShipmentProduct:IShipmentProducts){
    this.ShipmentProductsService.AddNewShipmentProducts(ShipmentProduct).subscribe((res: any)=>{
      this.getAllShipmentProducts(this.data.ID);
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
      this.ShipmentProduct = {shipmentId:this.data.ID};
    });
  }

  EditShipmentProducts(ShipmentProduct:IShipmentProducts){
    this.ShipmentProductsService.EditShipmentProducts(ShipmentProduct).subscribe((res: any)=>{
      this.getAllShipmentProducts(this.data.ID);
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
      this.ShipmentProduct = {shipmentId:this.data.ID};
    });
  }

  DeleteShipmentProductEvent(event:any){
    this.openDialogDelete(event);
  }

  EditShipmentProductEvent(event:any){
    this.ShipmentProduct = event;
    this.openDialog('Edit');
  }

   //Delete Shipment
   DeleteShipmentProduct(Shipment:any)
   {
     console.log(Shipment)
     this.ShipmentProductsService.DeleteShipmentProducts(Shipment).subscribe(res=>{
       this.getAllShipmentProducts(this.data.ID);
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
 
   openDialogDelete(Shipment:any): void {
     const dialogRef = this.dialog.open(DeleteShipmentComponent, {
       data:{ID:Shipment.shipmentId,name:Shipment.prodName +" Product from Shipment"}
     });
     dialogRef.afterClosed().subscribe(result => {
       console.log(result);
       if(result)
         this.DeleteShipmentProduct(Shipment);
     });
   }
   
   openDialog(EditOrAdd:string){
    const dialogRef = this.dialog.open(AddOrEditShipmentProductComponent, {
      data: {
        shipmentId: this.ShipmentProduct.shipmentId,
        prodId:this.ShipmentProduct.prodId,
        prodName:this.ShipmentProduct.prodName,
        prodPrice:this.ShipmentProduct.prodPrice,
        totalPrice:this.ShipmentProduct.totalPrice,
        quantity:this.ShipmentProduct.quantity,
        currentList:this.ViewData,
        ProductsList:this.ProductServices.getAllProducts(),
        EditOrAdd:EditOrAdd
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(EditOrAdd == "Add" && result != undefined){
        this.ShipmentProduct = result;
        console.log(this.ShipmentProduct);
        this.AddNewShipmentProducts(this.ShipmentProduct);
      }
      else if(EditOrAdd == "Edit" && result != undefined)
      {
        this.ShipmentProduct = result;
        console.log(this.ShipmentProduct);
        this.EditShipmentProducts(this.ShipmentProduct);
      }
      else
      {
        this.ShipmentProduct = {shipmentId:this.data.ID};
      }
    });
  }
}
