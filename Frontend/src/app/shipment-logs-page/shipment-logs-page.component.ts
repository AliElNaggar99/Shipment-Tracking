import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipment-logs-page',
  templateUrl: './shipment-logs-page.component.html',
  styleUrls: ['./shipment-logs-page.component.scss']
})
export class ShipmentLogsPageComponent implements OnInit {

  constructor() { }

  SeletedShipmentLogObject : any;

  ngOnInit(): void {
  }


  SeletedShipmentLog(e :any){
    this.SeletedShipmentLogObject = e;
  }

}
