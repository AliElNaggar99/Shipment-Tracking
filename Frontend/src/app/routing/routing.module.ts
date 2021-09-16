import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ShipmentComponent } from '../shipment/shipment.component';
import { HomePageCardsComponent } from '../home-page-cards/home-page-cards.component';
import { SupplierPageComponent } from '../supplier-page/supplier-page.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { ClearBorkersComponent } from '../clear-borkers/clear-borkers.component';
import { CurrenciesComponent } from '../currencies/currencies.component';
import { StoragePageComponent } from '../storage-page/storage-page.component';
import { PortPageComponent } from '../port-page/port-page.component';
import { StatuspageComponent } from '../statuspage/statuspage.component';
import { ShippingCompanyPageComponent } from '../shipping-company-page/shipping-company-page.component';
import { PurchasingTeamPageComponent } from '../purchasing-team-page/purchasing-team-page.component';


const routes : Routes = [
  { path: 'shipments', component: ShipmentComponent },
  {path:'suppliers',component:SupplierPageComponent},
  {path:'products',component:ProductPageComponent},
  {path:'clearance brokers',component:ClearBorkersComponent},
  {path:'currencies',component:CurrenciesComponent},
  {path:'storages',component:StoragePageComponent},
  {path:'ports',component:PortPageComponent},
  {path:'status',component:StatuspageComponent},
  {path:'shipping companies',component:ShippingCompanyPageComponent},
  {path:'purchasing teams',component:PurchasingTeamPageComponent},
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
