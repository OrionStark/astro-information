import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MarsRoverPicture } from '../model/MarsRoverData';
import { Http } from '@angular/http';
import { NasaService } from '../services/nasa.service';
@Component({
  selector: 'app-mars-rover-landscape',
  templateUrl: './mars-rover-landscape.component.html',
  styleUrls: ['./mars-rover-landscape.component.scss']
})
export class MarsRoverLandscapeComponent implements OnInit {

  constructor(private _http: Http, private _nasaServices: NasaService) {

   }

  mars_rover_data: MarsRoverPicture;

  ngOnInit() {
    this._nasaServices.getMarsPhotos(new Date())
      .subscribe(
        data => {
          const json_data = JSON.parse(data.text());
        },
        err => {
          console.log(err);
        }
      );
  }

  getData() {
  }

}
