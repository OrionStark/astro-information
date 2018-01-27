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
  NEO_Today: any;
  private _sub_: any;
  constructor( private _route: ActivatedRoute, private _nasaServices: NasaService ) {
    this.spinner_visible = true;
    this.getTodayNEO();
    setTimeout(() => {
      this.spinner_visible = false;
      this.content_visible = true;
    }, 3000);
   }

  ngOnInit() {}

  ngAfterViewInit() {}

  getTodayNEO() {
    this._sub_ = this._nasaServices.getTodayNEO()
    .subscribe(
      data => {
        const body_JSON = JSON.parse(data.text());
        this.NEO_Today = body_JSON.near_earth_objects[this._nasaServices.getTodayStringDate().toString()];
        console.log(this.NEO_Today);
      },
      err => {
        console.log('error');
      }
    );
  }
  ngOnDestroy() {
    this._sub_.unsubscribe();
  }
}
