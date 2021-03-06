import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteShipmentComponent } from '../delete-shipment/delete-shipment.component';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { ISupplier } from '../interfaces/ISupplier';
import { SupplierService } from '../Services/supplier.service';

@Component({
  selector: 'app-supplier-page',
  templateUrl: './supplier-page.component.html',
  styleUrls: ['./supplier-page.component.scss']
})
export class SupplierPageComponent implements OnInit {

  constructor(private mySupplierService : SupplierService,public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  TableView : string = 'supplierData';
  ViewData : any  ;
  ColumnName: string = 'supplierColumn';

  Supplier:ISupplier ={};
 

  ngOnInit(): void {
    this.getAllSupplier();
  }

  AddNewSupplier(supplier:ISupplier){
    this.mySupplierService.AddNewSupplier(supplier).subscribe((res: any)=>{
      this.getAllSupplier();
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
      this.Supplier = {};

    });
  }

  EditSupplier(supplier:ISupplier){
    this.mySupplierService.EditSupplier(supplier).subscribe((res: any)=>{
      this.getAllSupplier();
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
      this.Supplier = {};
    });
  }

  getAllSupplier(){
    this.mySupplierService.getAllSuppliers().subscribe(res=>{
      this.ViewData = res;
      console.log(this.ViewData);
    },error =>{
      this._snackBar.open("There is No Suppliers Yet ❌","",{
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    });
  }

  EditSupplierEvent(event:any){
    this.Supplier = event;
    this.openDialog('Edit');
  }

  openDialog(EditOrAdd:string){
    const dialogRef = this.dialog.open(InputDialogComponent, {
      data: {title:"Supplier",spId: this.Supplier.spId,spName:this.Supplier.spName,spLoc:this.Supplier.spLoc,EditOrAdd: EditOrAdd , DataDB:"supplierDataDB" ,DataDBNames:"supplierDataDBNames"}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(EditOrAdd == "Add" && result != undefined){
        this.Supplier = result;
        console.log(this.Supplier);
        this.AddNewSupplier(this.Supplier);
      }
      else if(EditOrAdd == "Edit" && result != undefined)
      {
        this.Supplier = result;
        console.log(this.Supplier);
        this.EditSupplier(this.Supplier);
      }
      else
      {
        this.Supplier = {};
      }
    });

  }

  DeleteSupplierEvent(event:any){
    this.openDialogDelete(event.spId,event.spName);
  }


  openDialogDelete(id:number,SpName:string): void {
    const dialogRef = this.dialog.open(DeleteShipmentComponent, {
      data:{ID:"Supplier",name:SpName}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result)
        this.DeleteSupplier(id);
    });
  }

  DeleteSupplier(id:number){
    this.mySupplierService.DeleteSupplier(id).subscribe(res=>{
      this.getAllSupplier();
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
