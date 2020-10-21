import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.css']
})
export class ModalformComponent implements OnInit {

  constructor(private productservice: ProductserviceService, private routerr: Router) { }

  ngOnInit() {
    this.productservice.openModalsubj.subscribe((succe)=>{
      console.log(succe);
      
      if(succe){
        if(succe.key=='displayerror'){
          this.displayerror = succe.key;
        }
        else if(succe.key=='displayform'){
          this.displayform = succe.key;
        }
      }
    })
  }

  clickedclose(){
    this.displayerror = null;
this.displayform = null
  }
  displayerror = null;
  displayform = null
  closeModal() {
    this.displayerror = null;
    this.displayform = null
  }

  namevalue='';
  mobilevalue = '';
  addressvalue = '';
  emailvalue = '';

  clickedSubmit(){
    if(this.namevalue==''||this.emailvalue==''||this.addressvalue==''||this.mobilevalue==''){
      alert('All feilds are mandatory. Please enter valid details in all feilds');
      return;
    }
    const msg = 'Please login before making any further operations, You will be redirected to login page shortly';
    this.showmsgg = true;
    setTimeout(()=>{
      
      this.closeModal();
      this.routerr.navigateByUrl('/login')
    },4000)
  }
  showmsgg = false;
  msgg='Please login before making any further operations, You will be redirected to login page shortly';
}
