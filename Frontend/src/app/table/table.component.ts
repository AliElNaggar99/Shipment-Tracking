import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IShipment } from '../interfaces/IShipment';
import {ViewModel} from '../interfaces/ViewModel';
import { Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

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

  @ViewChild(MatSort)
  sort!: MatSort;
  
  displayedColumns: string[] = [];
 // dataSource :any =[];
  ColumnName:any = [];
  dataSource = new MatTableDataSource<any>(this.ViewData);

  constructor(private myViewModel:ViewModel) {}
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.displayedColumns= (this.myViewModel.ViewModelObject as any)[this.TableView];
    this.dataSource =  new MatTableDataSource<any>(this.ViewData);
    this.ColumnName = (this.myViewModel.ViewModelObject as any)[this.ColumnNames];
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.dataSource =  new MatTableDataSource<any>(this.ViewData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  GetItemToDelete(object:any){
    this.DeleteItem.emit(object);
  }

  GetItemToEdit(object:any){
    this.EditItem.emit(object);
  }

}
