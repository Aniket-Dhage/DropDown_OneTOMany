import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/model/supplier';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private common: CommonService, private router: Router) { }

  productform: FormGroup;

  supplierList: Supplier[];

  ngOnInit(): void 
  {
    this.productform= this.formbuilder.group({

      id: [],
      productName: [],
      productCost: [],
      supplier: []
    })

    this.common.getSupplier().subscribe(data=>{
      this.supplierList= data;
    })
  }

  onsubmit()
  {
    this.common.addProduct(this.productform.value).subscribe();
    
    this.router.navigate(['home/product/product-list']);
  }



}
