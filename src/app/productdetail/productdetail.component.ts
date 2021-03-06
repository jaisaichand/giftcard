import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor(private prodService: ProductserviceService) { }

  selectedProd = null;
  showmsg = false;
  clickedaddTocart = false;
  allProducts = this.prodService.realproducts;
  currentInd = 0;
  ngOnInit() {
    window.scrollTo(0,0)
    this.prodService.prodSubj.subscribe((success) => {
      console.log(success);
      this.selectedProd = success;
    } );
  }

  addtocart() {
    console.log(this.selectedProd);
    console.log(this.prodService.realproducts);
    
    this.prodService.realproducts.forEach((val, ind) => {
      if ( val.id === this.selectedProd.id) {
       console.log(val);
        this.currentInd = ind;

        if (this.prodService.realproducts[this.currentInd].qty === 0) {
          this.prodService.addproductsubj.next({key: 'add'} );
        }
        this.prodService.realproducts[ind].qty = this.prodService.realproducts[ind].qty + 1;
      }
    } );

    this.showmsg = true;
    this.clickedaddTocart = true;
    // console.log(this.currentInd);

    // console.log(this.prodService.products[this.currentInd]);
    // console.log(this.prodService.products[this.currentInd].qty);


  }



}
