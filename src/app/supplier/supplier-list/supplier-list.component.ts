import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/model/supplier';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  constructor(private common:CommonService) { }

  supplierList: Supplier[];

  ngOnInit(): void 
  {
    this.common.getSupplier().subscribe(data=>{
      this.supplierList=data;
    })

    // this.supplierList.forEach(s => {

    //   console.log(s.id);
      
    // });




  } 
}
