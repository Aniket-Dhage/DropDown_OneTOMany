import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from '../product/product-add/product-add.component';
import { ProductComponent } from '../product/product/product.component';
import { SupplierComponent } from '../supplier/supplier/supplier.component';

export const Hroutes: Routes = [
  {
    path: 'product', component:ProductComponent,
    loadChildren:()=>import('src/app/product/product.module').then(module=>module.ProductModule)
  },
  {
    path: 'supplier', component:SupplierComponent,
    loadChildren:()=>import('src/app/supplier/supplier.module').then(module=>module.SupplierModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(Hroutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
