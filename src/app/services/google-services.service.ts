import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class GoogleServicesService {
  private API_KEY: String = 'AIzaSyAfOAoHVk4cVXbgvhd7dS0ogE3DIksufWI';
  constructor( private _http: Http ) { }

  getStaticMapImage( lat: string, lon: string ): string {
    const urls = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lon + '&zoom=12&size=400x100&key=' + this.API_KEY;
    return urls;
  }
}
