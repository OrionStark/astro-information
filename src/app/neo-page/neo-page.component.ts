import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NasaService } from '../services/nasa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-neo-page',
  templateUrl: './neo-page.component.html',
  styleUrls: ['./neo-page.component.scss']
})
export class NeoPageComponent implements OnInit, AfterViewInit, OnDestroy {
  spinner_visible: Boolean = false;
  content_visible: Boolean = false;
  mode_text: String = '';
  NEO_Today: any;
  private _sub_: any;
  constructor( private _route: ActivatedRoute, private _nasaServices: NasaService ) {
    /*
      Prepare the spinner and get the data
    */
    this._sub_ = this._route.params.subscribe(
      params => {
        if ( params['mode'] === 'today' ) {
          this.getTodayNEO();
        } else if ( params['mode'] === 'week' ) {
          this.getWeeklyNEO();
        } else if ( params['mode'] === 'getbydate' ) {
          const start = new Date(params['start']);
          const end = new Date(params['end']);
          const length = params['size'];
          this.getByDateNEO(start, end, length);
        } else {
          //
        }
      }
    );
   }

  ngOnInit() {}

  ngAfterViewInit() {}

  getTodayNEO() {
    this.content_visible = false;
    this.spinner_visible = true;
    this._nasaServices.getTodayNEO()
    .subscribe(
      data => {
        const body_JSON = JSON.parse(data.text());
        this.NEO_Today = body_JSON.near_earth_objects[this._nasaServices.getTodayStringDate().toString()];
        this.spinner_visible = false;
        this.content_visible = true;
        this.mode_text = 'Today';
      },
      err => {
        console.log('error');
      }
    );
  }

  getWeeklyNEO() {
    this.content_visible = false;
    this.spinner_visible = true;
    this._nasaServices.getWeeklyNEO()
      .subscribe(
        data => {
          const body_JSON = JSON.parse(data.text());
          const tmp = [];
          const sec_tmp = [];
          const curr = new Date();
          let date = this._nasaServices.getFirstDate(new Date());
          let count = 0;
          for ( let i = 0; i < 7; i++ ) {
            date = new Date(curr.setDate(date.getDate() + count));
            tmp.push(body_JSON.near_earth_objects[this._nasaServices.getDateFormat(date).toString()]);
            count = 1;
          }
          for ( let i = 0; i < tmp.length; i++ ) {
            for ( let j = 0; j < tmp[i].length; j++ ) {
              sec_tmp.push(tmp[i][j]);
            }
          }
          this.NEO_Today = sec_tmp;
          this.spinner_visible = false;
          this.content_visible = true;
          this.mode_text = 'Weekly';
        },
        err => {
          console.log('error');
        }
      );

  }

  getByDateNEO( start: Date, end: Date, length: Number ) {
    this.content_visible = false;
    this.spinner_visible = true;
    this._nasaServices.getByDate(start, end)
      .subscribe(
        data => {
          const body_JSON = JSON.parse(data.text());
          const tmp = [];
          const sec_tmp = [];
          let count = 0;
          let date_buffer = start;
          for ( let i = 0; i < length; i++ ) {
            date_buffer = new Date( date_buffer.setDate( date_buffer.getDate() + count ) );
            tmp.push(body_JSON.near_earth_objects[this._nasaServices.getDateFormat(date_buffer).toString()]);
            count = 1;
          }
          for ( let i = 0; i < tmp.length; i++ ) {
            for ( let j = 0; j < tmp[i].length; j++ ) {
              sec_tmp.push(tmp[i][j]);
            }
          }
          this.NEO_Today = sec_tmp;
          this.spinner_visible = false;
          this.content_visible = true;
          this.mode_text = 'Weekly';
        }
      );
  }
  ngOnDestroy() {
    this._sub_.unsubscribe();
  }
}
