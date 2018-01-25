import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NasaService } from '../services/nasa.service';

@Component({
  selector: 'app-neo-page',
  templateUrl: './neo-page.component.html',
  styleUrls: ['./neo-page.component.scss']
})
export class NeoPageComponent implements OnInit {
  spinner_visible: Boolean = false;
  content_visible: Boolean = false;
  NEO_Today: any;
  constructor( private _nasaServices: NasaService ) { }

  ngOnInit() {
    this.spinner_visible = true;
    this.getTodayNEO();
    setTimeout(() => {
      this.spinner_visible = false;
      this.content_visible = true;
    }, 3000);
  }

  getTodayNEO() {
    this._nasaServices.getTodayNEO()
      .subscribe(
        data => {
          const body_JSON = JSON.parse(data.text());
          this.NEO_Today = body_JSON.near_earth_objects['2018-01-25'];
          console.log(this.NEO_Today);
        },
        err => {
          console.log('error');
        }
      );
  }

}
