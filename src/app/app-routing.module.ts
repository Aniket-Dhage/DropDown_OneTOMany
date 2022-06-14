import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hroutes } from './home/home-routing.module';
import { HomeComponent } from './home/home/home.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';

const routes: Routes = [
  {
    path: "", redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, children: Hroutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
