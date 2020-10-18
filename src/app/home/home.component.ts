import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import * as $ from 'jquery';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productservice: ProductserviceService, private router: Router, private renderer: Renderer2) { }

  @ViewChild('discoverone', {static: false}) discoverone: ElementRef;

  products = this.productservice.products;
  productsfirst = this.productservice.productsfirst;
  productssecond = this.productservice.productssecond;
  productssecondsliced = this.productservice.productssecondSliced;
  finproductssecond = this.productssecondsliced;
  productstoppics = this.productservice.productstoppics;

  clickedprod(prod) {
    console.log(prod);
    this.productservice.prodSubj.next(prod);
    this.productservice.selectedProduct = prod;
    this.router.navigateByUrl('/product');
  }

  clickedOpenModal(){
    
  }

  discovermoreClicked() {
    this.finproductssecond = this.productssecond;
    this.renderer.addClass(this.discoverone.nativeElement, 'd-none' );
  }

  ngOnInit() {
    this.productservice.selectedProduct = null;
    this.productservice.prodSubj.next(null);
  }

}
