import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuroraLiveService } from '../services/aurora-live.service';
import { GoogleServicesService } from '../services/google-services.service';
import { AuroraLocationsModel } from '../model/AuroraLocation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aurora-hunting',
  templateUrl: './aurora-hunting.component.html',
  styleUrls: ['./aurora-hunting.component.scss']
})
export class AuroraHuntingComponent implements OnInit, OnDestroy {
  spinner_visible: Boolean = false;
  content_visible: Boolean = false;
  hunting_locations: AuroraLocationsModel[] = [];
  private sub: any;
  constructor( private aurora_live_services: AuroraLiveService, private google: GoogleServicesService,
  private _router: Router ) {
  }

  ngOnInit() {
    this.getAuroraLocations();
  }

  getAuroraLocations() {
    this.content_visible = false;
    this.spinner_visible = true;
    this.sub = this.aurora_live_services.getAuroraHuntingLocations()
      .subscribe(
        data => {
          const JSON_body = JSON.parse(data.text());
          this.hunting_locations = JSON_body;
          console.log(this.hunting_locations);
          this.spinner_visible = false;
          this.content_visible = true;
        },
        err => {
          console.log(err);
        }
      );
  }

  getStaticMapImage( lat, lon ) {
    return this.google.getStaticMapImage(lat, lon);
  }

  goLocationInformation( lat, lon ) {
    this._router.navigate(['location-info', { lat: lat, long: lon }]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
