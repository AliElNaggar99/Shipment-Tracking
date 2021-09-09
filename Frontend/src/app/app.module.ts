import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ShipmentComponent } from './shipment/shipment.component';
import { TableComponent } from './table/table.component'; 
import { HttpClientModule } from '@angular/common/http';
import { MenuBarComponent } from './menu-bar/menu-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ShipmentComponent,
    TableComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
