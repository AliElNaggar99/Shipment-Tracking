import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent implements OnInit {
  
  @Input() SeletedShipmentLogs : any;

  shipmentID : any = "";
  
  @ViewChild(BaseChartDirective, { static: true })
  chart!: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    this.shipmentID = this.SeletedShipmentLogs[0].shippmentId;
    let StatusList: any[] =[];
    let TimeOfEachStatus: any[] =[];
    this.SeletedShipmentLogs.forEach((element: { statusName: any , startDate: any, endDate: any; }) => {
      StatusList.push(element.statusName);
      let CreatedDate : any = new Date(element.startDate);
      let LastDate : any = new Date (element.endDate);
      var diffTime = (Math.abs(CreatedDate-LastDate)/86400000).toFixed(1);;
      TimeOfEachStatus.push(diffTime);
    });
    this.chartDatasets[0] ={ data:TimeOfEachStatus, label: 'Days taken by each status of Shipment ' + this.shipmentID };
    this.chartLabels = StatusList;
    if(this.chart !== undefined){
      this.chart.ngOnDestroy();
      this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
    }
    console.log(StatusList);
  }
  public chartType: string = 'bar';

  public chartDatasets: Array<any> =[];
  
  public chartLabels: Array<any> = [];
  
    public chartColors: Array<any> = [
      {
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2,
      },
      {
        backgroundColor: [
          'rgba(255, 125, 158, 0.2)',
          'rgba(3, 111, 184, 0.2)',
          'rgba(255, 255, 137, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(126, 243, 243, 0.2)',
          'rgba(255, 210, 115, 0.2)'
        ],
        borderColor: [
          'rgba(255, 125, 158, 1)',
          'rgba(3, 111, 184, 1)',
          'rgba(255, 255, 137, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(126, 243, 243, 1)',
          'rgba(255, 210, 115, 1)'
        ],
        borderWidth: 2,
      },
      ];
      public chartOptions: any = {
        responsive: true,
          scales: {
            xAxes: [{
              stacked: true
              }],
            yAxes: [
            {
              stacked: true
            }
          ]
        }
      };
      public chartClicked(e: any): void { }
      public chartHovered(e: any): void { }

     
}
