import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private productService: ProductserviceService) { }

  ngOnInit() {
    window.scrollTo(0,0)
  }
  invalidd = null;

  onLogin(){
    this.invalidd = true;
    setTimeout(()=>{
      this.invalidd = null;
    },3000)
  }

  forgotPassword(){
    this.productService.openModalsubj.next({key: 'displayerror'});
  }

}
