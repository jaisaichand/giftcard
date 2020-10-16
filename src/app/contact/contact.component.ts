import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 clickedOpenModal = () => {
    $('#myModal').modal('show');
}

cardInputCapture = (eve) => {
  var evee = this.cardNumberval;
  console.log(evee);
}

cardval:any;
cardNumberval='';

 cardPinCapture = (ev) => {

  if (this.cardval.length > 4) {
      var temp = this.cardval;
      console.log(temp);
      var funn = temp.toString();
      var fuss = funn.slice(0, 4);

      var finn = Number(fuss);
      console.log(finn);
      console.log(typeof (finn));


      this.cardval = finn;
      return;
  }
  console.log(document.getElementById('cardpin'));
  var pinn = this.cardval;
  console.log(typeof (pinn));
  if (this.cardval == '') {
    this.cardval = '';
  }

  console.log(pinn);

}

}
