import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private route:ActivatedRoute, private router: Router){ 
    router.events.subscribe((suv:any)=>{

      var tt = document.URL;
      var dd = tt.indexOf('#');
      console.log(tt.slice(dd).slice(2));
      
      if(tt!=undefined&&tt!=null){
        console.log(tt.slice(1));

      this.routee = tt.slice(dd).slice(2);
      }

    })

   }
  title = 'furnangular';

  routee = '';
  ngOnInit() {
console.log(this.route);


  }
}
