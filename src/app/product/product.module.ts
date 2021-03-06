import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductAddComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
