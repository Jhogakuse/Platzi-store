import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';


@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    ProductsTableComponent,
    ProductsListComponent,
    ProductsDashboardComponent
  ],
  imports: [
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
