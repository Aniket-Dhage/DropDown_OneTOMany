import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SupplierAddComponent,
    SupplierListComponent,
    SupplierComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    ReactiveFormsModule
  ]
})
export class SupplierModule { }
