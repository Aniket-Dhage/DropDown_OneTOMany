import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private common: CommonService) { }

  productList: Product[];

  ngOnInit(): void 
  {
    this.common.getProducts().subscribe(data=>{
      this.productList=data;
    })
  }

}
