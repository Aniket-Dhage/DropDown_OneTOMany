import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';

const routes: Routes = [
  {
    path: 'supplier-list', component: SupplierListComponent
  },
  {
    path: 'supplier-add', component: SupplierAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
