import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mode = new FormControl('over');
  NEO_start_date: Date;
  NEO_end_date: Date;

  constructor( private _router: Router ) { }

  ngOnInit() {}

  getNEObyDate() {
    if ( this.NEO_start_date != null && this.NEO_end_date != null ) {
      if ( this.NEO_start_date < this.NEO_end_date ) {
        // Go to next component
        console.log(this.NEO_start_date.toISOString().substring(0, 10));
        console.log(this.NEO_end_date.toISOString().substring(0, 10));
      } else {
        //
        console.log('Date is not valid');
      }
    } else {
      //
      console.log('Some of the dates are empty');
    }
  }
}
