import { Component, OnInit, Input } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemrow',
  templateUrl: './itemrow.component.html',
  styleUrls: ['./itemrow.component.css']
})
export class ItemrowComponent implements OnInit {

  constructor(private productservice: ProductserviceService, private router: Router) { }

  @Input('productss') productss=[];

  ngOnInit() {
  }

  clickedprod(prod) {
    console.log(prod);
    this.productservice.prodSubj.next(prod);
    this.productservice.selectedProduct = prod;
    this.router.navigateByUrl('/product');
  }

}
