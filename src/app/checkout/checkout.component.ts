import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private productservice: ProductserviceService) { }
checkoutList = [];
totalcartprice = 0;
modalview = false;
  ngOnInit() {
    this.productservice.closemodalSubj.subscribe((succ: any)=>{
      if(succ){
        if(succ.key=='close'){
          this.modalview=false;
        }
      }
    })
    this.productservice.products.forEach(( val , ind ) => {
      if (val.qty > 0 ) {
        this.checkoutList.push(val);
        this.totalcartprice = this.totalcartprice + (val.qty * val.price );
      }
    });
    console.log(this.checkoutList);



  }
  removeProd(index, price, prod) {
    this.checkoutList.splice(index, 1);
    this.totalcartprice = this.totalcartprice - price;
    this.productservice.addproductsubj.next({key: 'remove'});
    this.productservice.products.forEach((val, ind) => {
      if (val.id === prod.id) {
        this.productservice.products[ind].qty = 0;
      }
    } );
  }

  openModal(){
    this.modalview = true;
  }

}