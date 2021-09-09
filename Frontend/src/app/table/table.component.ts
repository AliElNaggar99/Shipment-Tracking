import { Component, Input, OnInit } from '@angular/core';
import { IShipment } from '../interfaces/IShipment';
import {ViewModel} from '../interfaces/ViewModel';

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

  displayedColumns: string[] = [];
  dataSource :any =[];
  ColumnName:any = [];


  constructor(private myViewModel:ViewModel) {}

  ngOnInit(): void {
    this.displayedColumns= (this.myViewModel.ViewModelObject as any)[this.TableView];
    this.dataSource = this.ViewData;
    this.ColumnName = (this.myViewModel.ViewModelObject as any)[this.ColumnNames];
  }

}
