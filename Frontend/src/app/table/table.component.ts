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

  @Output() DeleteItem = new EventEmitter<any>();
  @Output() EditItem = new EventEmitter<any>();

  displayedColumns: string[] = [];
  dataSource :any =[];
  ColumnName:any = [];


  constructor(private myViewModel:ViewModel) {}


  ngOnInit(): void {
    this.displayedColumns= (this.myViewModel.ViewModelObject as any)[this.TableView];
    this.dataSource = this.ViewData;
    this.ColumnName = (this.myViewModel.ViewModelObject as any)[this.ColumnNames];
  }

  ngOnChanges() {
    this.dataSource = this.ViewData;
  }

  GetItemToDelete(object:any){
    this.DeleteItem.emit(object);
  }

  GetItemToEdit(object:any){
    this.EditItem.emit(object);
  }

}
