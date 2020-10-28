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

  products = this.productservice.realproducts;
  productsfirst = this.productservice.walmartItems;
  productssecond = this.productservice.targetItems;
  productssecondsliced = this.productservice.homeDepotItems;
  finproductssecond = this.productssecondsliced;
  productstoppics = this.productservice.targetItems;

  clickedprod(prod) {
    console.log(prod);
    this.productservice.prodSubj.next(prod);
    this.productservice.selectedProduct = prod;
    this.router.navigateByUrl('/product');
  }

  clickedOpenModal(){
    
  }

  activeSlideIndex =0;

  sliderr = [
    'assets/img/carouselone.jpeg',
    'assets/img/carouseltwo.jpg',
    'assets/img/carouselthree.jpg'
  ]

  discovermoreClicked() {
    this.finproductssecond = [this.productservice.walmartItems[this.productservice.walmartItems.length-2],this.productservice.walmartItems[this.productservice.walmartItems.length-1]];
    this.renderer.addClass(this.discoverone.nativeElement, 'd-none' );
  }

  ngOnInit() {
    this.productservice.selectedProduct = null;
    this.productservice.prodSubj.next(null);
  }

}
