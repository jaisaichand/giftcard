import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productservice: ProductserviceService) { }
  cartcount = this.productservice.cartcount;

  ngOnInit() {
    this.productservice.addproductsubj.subscribe((succe: any) => {
      console.log(succe);

      if (succe) {
        if (succe.key === 'add') {
          this.cartcount = this.cartcount + 1;
          this.productservice.cartcount = this.cartcount;
        } else if (succe.key === 'remove' ) {
          if (this.cartcount > 0) {
            this.cartcount = this.cartcount - 1;
          }
          this.productservice.cartcount = this.cartcount;
        }
      }
    });
  }


}
