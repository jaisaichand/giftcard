import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  cardval: any;
  cardNumberval = '';
  constructor(private productservice: ProductserviceService ) { }

  ngOnInit() {
    this.productservice.selectedProduct = null;
    this.productservice.prodSubj.next(null);
  }

 clickedOpenModal = () => {
    $('#myModal').modal('show');
}

cardInputCapture = (eve) => {
  const evee = this.cardNumberval;
  console.log(eve);
}



 cardPinCapture = (ev) => {
   console.log(ev);
   console.log(ev.data);
   console.log(ev.data=='e');
   const pattern = /[0-9\+\-\ ]/;
   if(ev.data=='e'){
     console.log('j');
     ev.preventDefault();
     return;
   }
    let inputChar = String.fromCharCode(ev.data);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      ev.preventDefault();
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

clickedcheck(){
  if(this.cardval=='' || this.cardNumberval==''){
    alert('Details cant be empty!!');
    return;
  }
  else{
    var body = {
      cardnumber: this.cardNumberval,
      pin: this.cardval
    }
  }
}
}
