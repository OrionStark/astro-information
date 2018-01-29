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
        console.log(this.getDateFormat(this.NEO_start_date));
        console.log(this.getDateFormat(this.NEO_end_date));
      } else {
        //
        console.log('Date is not valid');
      }
    } else {
      //
      console.log('Some of the dates are empty');
    }
  }

  getDateFormat(date: Date): String {
    let month = '' + ( date.getMonth() + 1 );
    let day = '' + date.getDate();
    const year = '' + date.getFullYear();
    if ( month.length < 2 ) {
      month = '0' + month;
    }
    if ( day.length < 2 ) {
      day = '0' + day;
    }

    return [ year, month, day ].join('-');
  }

  goToTodayNEO() {
    this._router.navigate(['/neo', { mode: 'today' }]);
  }
  goToMonthlyNEO() {
    this._router.navigate(['/neo', { mode: 'month' }]);
  }
  goToWeeklyNEO() {
    this._router.navigate(['/neo', { mode: 'week' }]);
  }
}
