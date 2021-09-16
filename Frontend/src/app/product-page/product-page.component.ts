import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteShipmentComponent } from '../delete-shipment/delete-shipment.component';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { IProduct } from '../interfaces/IProduct';
import { ProductService } from '../Services/product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  constructor(private myProductService : ProductService,public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  TableView : string = 'productData';
  ViewData : any  ;
  ColumnName: string = 'productColumn';

  Product:IProduct ={};

  ngOnInit(): void {
    this.getAllProducts();
  }

  AddNewProduct(product:IProduct){
    this.myProductService.AddNewProduct(product).subscribe((res: any)=>{
      this.getAllProducts();
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
      this.Product = {};
    });
  }

  EditProduct(product:IProduct){
    this.myProductService.EditProduct(product).subscribe((res: any)=>{
      this.getAllProducts();
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
      this.Product = {};
    });
  }

  getAllProducts(){
    this.myProductService.getAllProducts().subscribe(res=>{
      this.ViewData = res;
      console.log(this.ViewData);
    },error =>{
      this._snackBar.open("There is No Products Yet ❌","",{
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    });
  }

  EditProductEvent(event:any){
    this.Product = event;
    this.openDialog('Edit');
  }

  openDialog(EditOrAdd:string){
    const dialogRef = this.dialog.open(InputDialogComponent, {
      data: {title:"Product",prodId: this.Product.prodId,prodName:this.Product.prodName,prodWeight:this.Product.prodWeight,prodPrice:this.Product.prodPrice
      ,EditOrAdd: EditOrAdd , DataDB:"productDataDB" ,DataDBNames:"productDataDBNames"}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(EditOrAdd == "Add" && result != undefined){
        this.Product = result;
        console.log(this.Product);
        this.AddNewProduct(this.Product);
      }
      else if(EditOrAdd == "Edit" && result != undefined)
      {
        this.Product = result;
        console.log(this.Product);
        this.EditProduct(this.Product);
      }
      else
      {
        this.Product = {};
      }
    });

  }

  DeleteProductEvent(event:any){
    this.openDialogDelete(event.prodId,event.prodName);
  }


  openDialogDelete(id:number,Name:string): void {
    const dialogRef = this.dialog.open(DeleteShipmentComponent, {
      data:{ID:"Product",name:Name}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result)
        this.DeleteProduct(id);
    });
  }

  DeleteProduct(id:number){
    this.myProductService.DeleteProduct(id).subscribe(res=>{
      this.getAllProducts();
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
