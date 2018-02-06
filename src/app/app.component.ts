import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mode = new FormControl('over');
  NEO_start_date: any;
  NEO_end_date: any;

  constructor( private my_dialog: MatDialog, private _router: Router ) { }

  ngOnInit() {}

  getNEObyDate() {
    if ( this.NEO_start_date != null && this.NEO_end_date != null ) {
      if ( this.NEO_start_date < this.NEO_end_date ) {
        // Go to next component
        console.log(this.getDateFormat(this.NEO_start_date));
        console.log(this.getDateFormat(this.NEO_end_date));
        const length = Math.ceil((this.NEO_end_date - this.NEO_start_date) / (1000 * 60 * 60 * 24)) + 1;
        if ( length > 7 ) {
          console.log('Out of Bound');
          this.openDialog();
          return;
        }
        this.goToByDateNEO( this.NEO_start_date, this.NEO_end_date, length );
      } else {
        console.log('Date is not valid');
        return;
      }
    } else {
      console.log('Some of the dates are empty');
      return;
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
  goToWeeklyNEO() {
    this._router.navigate(['/neo', { mode: 'week' }]);
  }
  goToByDateNEO( start_date: Date, end_date: Date, length: Number ) {
    this._router.navigate(['/neo', { mode: 'getbydate', start: start_date.toDateString(), end: end_date.toDateString(), size: length }]);
  }
  goToAuroraHunting() {
    this._router.navigate(['/aurorahunting']);
  }

  openDialog(): void {
    const dialofRef = this.my_dialog.open(AlertDialog, {
      width: '300px',
      data: {case: 'error-date'}
    });
  }
}

@Component({
  selector: 'app-alert-dialog',
  templateUrl: 'app.alert-dialog.html',
  styleUrls: ['./app.alert-dialog.scss']
})

export class AlertDialog {
  constructor( public dialogref: MatDialogRef<AlertDialog>, @Inject(MAT_DIALOG_DATA) public data: any ) { }
  okButtonClicked() {
    this.dialogref.close();
  }
}
