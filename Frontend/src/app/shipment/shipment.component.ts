import { Component, OnInit } from '@angular/core';
import { IShipment } from '../interfaces/IShipment';
import { ShipmentService } from '../Services/shipment.service';



@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})


export class ShipmentComponent implements OnInit {

  TableView : string = 'shipmentData';
  ViewData : any  ;
  ColumnName: string = 'shipmentColumn';

  constructor(private ShipmentServices : ShipmentService) { }

  ngOnInit(): void {
   this.getAllShipments();
  }

  getAllShipments(){
    this.ShipmentServices.getAllShipments().subscribe(res=>{
      this.ViewData = res;
    },error =>{

    });
    console.log(this.ViewData);
  }

}
