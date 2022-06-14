import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private common:CommonService, private router: Router) { }

  supplierform: FormGroup;

  ngOnInit(): void 
  {
    this.supplierform= this.formbuilder.group({

      id:[],
      supplierName: [],
      supplierContact: []
    })
  }

  onsubmit()
  {
    this.common.addSupplier(this.supplierform.value).subscribe();
    this.router.navigate(['home/supplier/supplier-list'])
  }

}
