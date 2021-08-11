import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormProductEditComponent } from './components/form-product-edit/form-product-edit.component';


@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    ProductsTableComponent,
    ProductsListComponent,
    ProductsDashboardComponent,
    FormProductComponent,
    FormProductEditComponent
  ],
  imports: [
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
