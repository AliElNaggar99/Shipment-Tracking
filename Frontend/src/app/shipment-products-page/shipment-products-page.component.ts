import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddOrEditShipmentProductComponent } from '../add-or-edit-shipment-product/add-or-edit-shipment-product.component';
import { DeleteShipmentComponent } from '../delete-shipment/delete-shipment.component';
import { IShipmentProducts } from '../interfaces/IShipmentProduct';
import { ProductService } from '../Services/product.service';
import { ShipmentProductsService } from '../Services/shipment-products.service';
import { ShipmentService } from '../Services/shipment.service';

@Component({
  selector: 'app-shipment-products-page',
  templateUrl: './shipment-products-page.component.html',
  styleUrls: ['./shipment-products-page.component.scss']
})
export class ShipmentProductsPageComponent implements OnInit {

  constructor(private ShipmentProductsService: ShipmentProductsService,public dialog: MatDialog,
    private _snackBar: MatSnackBar,private ProductServices:ProductService,private ShipmentService:ShipmentService
    ) { }

    TableView : string = 'ShipmentProductsPageData';
    ViewData : any  ;
    ColumnName: string = 'ShipmentProductsPageColumn';
    ShipmentProduct:IShipmentProducts = {};
  
    ngOnInit(): void {
      this.getAllShipmentProducts();
    }

    getAllShipmentProducts(){
      this.ShipmentProductsService.getAllShipmentProducts().subscribe(res=>{
        this.ViewData = res;
        console.log(this.ViewData);
      },error =>{
        this._snackBar.open("There is No Shipment Products Yet Don't have any Products yet ❌","",{
          duration: 3000,
          panelClass: ['snackbar-error']
        });
      });
    }
  
  
    AddNewShipmentProducts(ShipmentProduct:IShipmentProducts){
      this.ShipmentProductsService.AddNewShipmentProducts(ShipmentProduct).subscribe((res: any)=>{
        this.getAllShipmentProducts();
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
        this.ShipmentProduct = {};
      });
    }
  
    EditShipmentProducts(ShipmentProduct:IShipmentProducts){
      this.ShipmentProductsService.EditShipmentProducts(ShipmentProduct).subscribe((res: any)=>{
        this.getAllShipmentProducts();
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
        this.ShipmentProduct = {};
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
         this.getAllShipmentProducts();
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
          ShipmentList:this.ShipmentService.getAllShipmentsId(),
          EditOrAdd:EditOrAdd,
          Called:"ShipmentProductPage"
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
          this.ShipmentProduct = {};
        }
      });
    }




}
