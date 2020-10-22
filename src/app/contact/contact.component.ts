import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { ProductserviceService } from '../productservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private productservice: ProductserviceService, private router: Router ) { }

  ngOnInit() {
    this.productservice.selectedProduct = null;
    this.productservice.prodSubj.next(null);

    let paternnn = "/^(?:9[0-9]{22})$/";
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
  if(this.cardval=='' || this.cardNumberval==''){
    alert('Details cant be empty!!');
    return;
  }
  else{
    //alert('...')
    console.log(this.myForm);
    console.log(this.myForm.valid);
    console.log(this.myForm.controls.cardnumber);
    console.log(this.myForm.controls.pinnumber);
    if(this.myForm.valid==false){
      alert('The details you have entered are incorrect, please check again');
      return;
    }
    
    
    var body = {
      cardnumber: this.cardnumbervall.nativeElement.value,
      pin: this.cardvall.nativeElement.value
    }
    this.showbusymodal = true;
    this.productservice.openModalsubj.next({key:'displayerror'});
  }
}

showbusymodal = false;
}
