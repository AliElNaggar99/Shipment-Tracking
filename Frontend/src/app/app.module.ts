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
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddShipmentPageComponent } from './add-shipment-page/add-shipment-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DeleteShipmentComponent } from './delete-shipment/delete-shipment.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { RoutingModule } from './routing/routing.module';
import { HomePageCardsComponent } from './home-page-cards/home-page-cards.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { SupplierPageComponent } from './supplier-page/supplier-page.component';
import { InputDialogComponent } from './input-dialog/input-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import { DropdownmenuComponent } from './dropdownmenu/dropdownmenu.component';
import { ProductPageComponent } from './product-page/product-page.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ViewShipmentProductsComponent } from './view-shipment-products/view-shipment-products.component';
import { AddOrEditShipmentProductComponent } from './add-or-edit-shipment-product/add-or-edit-shipment-product.component';
import { ClearBorkersComponent } from './clear-borkers/clear-borkers.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { StoragePageComponent } from './storage-page/storage-page.component';
import { PortPageComponent } from './port-page/port-page.component';
import { StatuspageComponent } from './statuspage/statuspage.component';
import { ShippingCompanyPageComponent } from './shipping-company-page/shipping-company-page.component';
import { PurchasingTeamPageComponent } from './purchasing-team-page/purchasing-team-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ShipmentComponent,
    TableComponent,
    MenuBarComponent,
    AddShipmentPageComponent,
    DeleteShipmentComponent,
    CardComponent,
    HomePageCardsComponent,
    SupplierPageComponent,
    InputDialogComponent,
    DropdownmenuComponent,
    ProductPageComponent,
    ViewShipmentProductsComponent,
    AddOrEditShipmentProductComponent,
    ClearBorkersComponent,
    CurrenciesComponent,
    StoragePageComponent,
    PortPageComponent,
    StatuspageComponent,
    ShippingCompanyPageComponent,
    PurchasingTeamPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    RoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
