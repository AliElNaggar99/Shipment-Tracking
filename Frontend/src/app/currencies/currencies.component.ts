import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteShipmentComponent } from '../delete-shipment/delete-shipment.component';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { ICurrency } from '../interfaces/ICurrency';
import { CurrenciesService } from '../Services/currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  constructor(private myCurrency : CurrenciesService,public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  TableView : string = 'currenyData';
  ViewData : any  ;
  ColumnName: string = 'currenyColumn';

  Currency:ICurrency ={};

  ngOnInit(): void {
    this.getAllCurrencies();
  }

  AddNewCurrency(Currency:ICurrency){
    this.myCurrency.AddNewCurrency(Currency).subscribe((res: any)=>{
      this.getAllCurrencies();
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
      this.Currency = {};

    });
  }

  EditCurreny(Currency:ICurrency){
    this.myCurrency.EditCurrency(Currency).subscribe((res: any)=>{
      this.getAllCurrencies();
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
      this.Currency = {};
    });
  }

  getAllCurrencies(){
    this.myCurrency.getAllCurrencies().subscribe(res=>{
      this.ViewData = res;
      console.log(this.ViewData);
    },error =>{
      this._snackBar.open("There is No Brokers Yet ❌","",{
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    });
  }

  EditCurrencyEvent(event:any){
    this.Currency = event;
    this.openDialog('Edit');
  }

  openDialog(EditOrAdd:string){
    const dialogRef = this.dialog.open(InputDialogComponent, {
      data: {title:"Currencies",
      currenId: this.Currency.currenId,
      currenName:this.Currency.currenName,
      EditOrAdd: EditOrAdd ,
      DataDB:"currenyDataDB" ,DataDBNames:"currenyDataDBNames"}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(EditOrAdd == "Add" && result != undefined){
        this.Currency = result;
        console.log(this.Currency);
        this.AddNewCurrency(this.Currency);
      }
      else if(EditOrAdd == "Edit" && result != undefined)
      {
        this.Currency = result;
        console.log(this.Currency);
        this.EditCurreny(this.Currency);
      }
      else
      {
        this.Currency = {};
      }
    });

  }

  DeleteCurrencyEvent(event:any){
    this.openDialogDelete(event.currenId,event.currenName);
  }


  openDialogDelete(id:number,Name:string): void {
    const dialogRef = this.dialog.open(DeleteShipmentComponent, {
      data:{ID:"Currency",name:Name}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result)
        this.DeleteCurrency(id);
    });
  }

  DeleteCurrency(id:number){
    this.myCurrency.DeleteCurrency(id).subscribe(res=>{
      this.getAllCurrencies();
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
