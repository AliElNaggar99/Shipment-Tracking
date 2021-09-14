import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ShipmentComponent } from '../shipment/shipment.component';
import { HomePageCardsComponent } from '../home-page-cards/home-page-cards.component';
import { SupplierPageComponent } from '../supplier-page/supplier-page.component';


const routes : Routes = [
  { path: 'shipments', component: ShipmentComponent },
  {path:'suppliers',component:SupplierPageComponent},
  { path: '**', component: HomePageCardsComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
