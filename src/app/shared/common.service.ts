import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Supplier } from '../model/supplier';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private Hclient: HttpClient) { }

  url: string= "http://localhost:3000/"

  addSupplier(s: Supplier)
  {
    return this.Hclient.post(this.url+"Supplier/",s);
  }

  getSupplier():Observable<Supplier[]>
  {
    return this.Hclient.get<Supplier[]>(this.url+"Supplier/");
  }

  getProducts():Observable<Product[]>
  {
    return this.Hclient.get<Product[]>(this.url+"Product/");
  }

  addProduct(p: Product)
  {
    return this.Hclient.post(this.url+"Product/",p);
  }

}
