import { Component, Input, OnInit } from '@angular/core';
import { IShipment } from '../interfaces/IShipment';
import {ViewModel} from '../interfaces/ViewModel';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers:[ViewModel]
})

export class TableComponent implements OnInit {

  @Input()
   TableView:string ="";
  @Input()
   ViewData:any = [];
  @Input()
   ColumnNames:any =[];
   @Input()
   IDName:any={};

  @Output() ReturnItemIt = new EventEmitter<any>();

  displayedColumns: string[] = [];
  dataSource :any =[];
  ColumnName:any = [];
  IDNameToget:string = "";


  constructor(private myViewModel:ViewModel) {}


  ngOnInit(): void {
    this.displayedColumns= (this.myViewModel.ViewModelObject as any)[this.TableView];
    this.dataSource = this.ViewData;
    this.ColumnName = (this.myViewModel.ViewModelObject as any)[this.ColumnNames];
    this.IDNameToget = this.IDName;
  }

  ngOnChanges() {
    this.dataSource = this.ViewData;
  }

  GetItemID(id:number,operation: string){
    let OperationAndID = {id:id,operation:operation};
    this.ReturnItemIt.emit(OperationAndID);
  }


}
