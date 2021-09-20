import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseChartDirective } from 'angular-bootstrap-md';
import { Chart } from 'chart.js';
import { ShipmentLogsService } from '../Services/shipment-logs.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor(private myShipmentLogs:ShipmentLogsService,private _snackBar: MatSnackBar) { }


  @Output() SeletedShipment = new EventEmitter<any>() ;

  @ViewChild(BaseChartDirective, { static: true })
  chart!: BaseChartDirective;

  AllShipemntsLogs :any = [];
  AllShipmentsID: any = [];
  AllShipmentTime:any = [];
  public chartLabels: Array<any> = [];
  public chartDatasets: Array<any> = [];
  ngOnInit(): void {
    this.myShipmentLogs.getAllShipmentLogs().subscribe(res =>{
        this.AllShipemntsLogs = res;
        this.AllShipemntsLogs.forEach((Shipment: { shippmentId: any; }) => {
          //getting All Id's
          this.AllShipmentsID.push(Shipment.shippmentId.toString());
        });
        //Getting unique Ids
        this.chartLabels=[... new Set(this.AllShipmentsID)];

        //Calculate the time for each log
        this.chartLabels.forEach(log =>{
          let CurrentLogs = this.AllShipemntsLogs.filter((ShipmentLog: any) => {
            return ShipmentLog.shippmentId == log;
          })

          let CreatedDate : any = new Date(CurrentLogs[0].startDate);
          let LastDate : any = new Date (CurrentLogs[CurrentLogs.length-1].endDate);
          var diffTime = (Math.abs(CreatedDate-LastDate)/86400000).toFixed(1);;
          this.AllShipmentTime.push(diffTime);
        })

        console.log(this.AllShipmentTime);
        this.chartDatasets[0]={ data: this.AllShipmentTime , label: 'number of days taken by Shipment'};
    },error =>{
      this._snackBar.open("There is No Shipments Yet ❌","",{
        duration: 3000,
        panelClass: ['snackbar-error']
      })});
  }

  public chartType: string = 'line';

  

  public chartColors: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    hover: {
      mode: 'nearest',
      intersec: true,
    },
  };

  public chartClicked(e: any): void {

    let ClickedLogs = this.AllShipemntsLogs.filter((ShipmentLog: any) => {
      return ShipmentLog.shippmentId == this.chartLabels[e.active[0]._index];
    })
    this.SeletedShipment.emit(ClickedLogs);
   }
  public chartHovered(e: any): void { }



}
