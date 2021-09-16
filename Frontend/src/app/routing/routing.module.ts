import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ShipmentComponent } from '../shipment/shipment.component';
import { HomePageCardsComponent } from '../home-page-cards/home-page-cards.component';
import { SupplierPageComponent } from '../supplier-page/supplier-page.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { ClearBorkersComponent } from '../clear-borkers/clear-borkers.component';
import { CurrenciesComponent } from '../currencies/currencies.component';


const routes : Routes = [
  { path: 'shipments', component: ShipmentComponent },
  {path:'suppliers',component:SupplierPageComponent},
  {path:'products',component:ProductPageComponent},
  {path:'clearance brokers',component:ClearBorkersComponent},
  {path:'currencies',component:CurrenciesComponent},
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
