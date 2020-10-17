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
  ngOnInit() {
    this.prodService.prodSubj.subscribe((success) => {
      console.log(success);
      this.selectedProd = success;
    } );
  }

}
