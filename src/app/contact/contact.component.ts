import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as $ from 'jquery';
import { ProductserviceService } from '../productservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  cardval: any;
  cardNumberval = '';
  @ViewChild('cardval', {static: false}) cardvall: ElementRef;
  @ViewChild('cardnumberval', {static: false}) cardnumbervall: ElementRef;
  constructor(private productservice: ProductserviceService, private router: Router,
     private http: HttpClient, private renderer: Renderer2) { }

  ngOnInit() {
    this.productservice.selectedProduct = null;
    this.productservice.prodSubj.next(null);

    let paternnn = /^(?:9[0-9]{22})$/;
    this.myForm = new FormGroup({
      cardnumber : new FormControl('', [Validators.required , Validators.pattern(paternnn)]),
      pinnumber: new FormControl('', [Validators.required])
    })
  }

 clickedOpenModal = () => {
    $('#myModal').modal('show');
}

cardInputCapture = (eve) => {
  return;
  let cardno = /^(?:9[0-9]{22})$/gi;
  console.log(eve.target.value);
  if (eve.target.value.match(cardno))
        {
          console.log(true);
          
      return true;
        }
      else
        {
          console.log(false);
        //alert("Should Start with 9!");
        return false;
        }
  const evee = this.cardNumberval;
  console.log(eve);
}

mouseovergift(eve){
  console.log(eve);
  console.log(eve.srcElement.nextElementSibling);
  this.renderer.removeClass(eve.srcElement.nextElementSibling,'d-none');
  
}

mouseleavegift(eve){
  console.log(eve.srcElement.nextElementSibling);
  this.renderer.addClass(eve.srcElement.nextElementSibling,'d-none');
}

myForm: FormGroup;

pinvalid = false;

 cardPinCapture = (ev) => {

  
   console.log(ev);
   console.log(ev.data);
   console.log(ev.data=='e');
   this.pinvalid=true;
   if(ev.target.value.length>4){
    //alert("pin can't be more than 4 charecters");
    this.pinvalid=false;
    return;
  }


  // if (this.cardval.length > 4) {
  //     const temp = this.cardval;
  //     console.log(temp);
  //     const funn = temp.toString();
  //     const fuss = funn.slice(0, 4);

  //     const finn = Number(fuss);
  //     console.log(finn);
  //     console.log(typeof (finn));


  //     this.cardval = finn;
  //     return;
  // }
  // console.log(document.getElementById('cardpin'));
  // const pinn = this.cardval;
  // console.log(typeof (pinn));
  // if (this.cardval === '') {
  //   this.cardval = '';
  // }

  // console.log(pinn);

}
selectedgiftcard = null;

clickedOn(key){
  console.log(key);
  this.selectedgiftcard = key;
  if(key=='homedepot'){
    this.productss = this.productservice.homeDepotItems;
  }
  if(key=='target'){
    this.productss = this.productservice.targetItems;
  }
  if(key=='walmart'){
    this.productss = this.productservice.walmartItems;
    console.log(this.productss);
    
  }
}
clickedprod(prod) {
  console.log(prod);
  this.productservice.prodSubj.next(prod);
  this.productservice.selectedProduct = prod;
  this.router.navigateByUrl('/product');
}

productss=[];

clickedcheck(){
  console.log(this.myForm);
  console.log(this.myForm.controls.cardnumber.value);
  console.log(this.myForm.controls.pinnumber.value);
  if(this.myForm.controls.cardnumber.value=='' || this.myForm.controls.pinnumber.value==''){
    alert('Details cant be empty!!');
    return;
  }
  else{
    
    console.log(this.myForm);
    console.log(this.myForm.valid);
    console.log(this.myForm.controls.cardnumber.value);
    console.log(this.myForm.controls.pinnumber.value);
    if(this.myForm.valid==false){
      alert('The details you have entered are incorrect, please check again');
      return;
    }
    
    
    var body = {
      "gift_card_number": this.myForm.controls.cardnumber.value,
      "giftcard":this.selectedgiftcard,
      "pin_number":this.myForm.controls.pinnumber.value
      };
      
      
    this.http.post('https://homedepots.herokuapp.com/web/check_balance',body).subscribe((succe)=>{

    },(err)=>{
      console.log(err);
      
    })
    this.showbusymodal = true;
    this.productservice.openModalsubj.next({key:'displayerror'});
  }
}

showbusymodal = false;
}
