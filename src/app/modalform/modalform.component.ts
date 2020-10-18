import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';


@Component({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.css']
})
export class ModalformComponent implements OnInit {

  constructor(private productservice: ProductserviceService) { }

  ngOnInit() {
  }

  closeModal() {
    this.productservice.closemodalSubj.next({key: 'close'});
  }

  clickedSubmit(){
    const msg = 'Query saved succesfully, We will get back to you with the order';
    this.showmsgg = true;
    setTimeout(()=>{
      this.productservice.closemodalSubj.next({key: 'close'});
    },3500)
  }
  showmsgg = false;
  msgg='Query saved succesfully, We will get back to you with the order';
}
