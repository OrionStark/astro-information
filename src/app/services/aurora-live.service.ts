import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuroraLiveService {

  private URL: String = 'https://api.auroras.live/v1/?type=locations'; // Locations Hunting Aurora
  constructor( private _http: Http ) { }

  getAuroraHuntingLocations() {
    return this._http.get(this.URL.toString());
  }

  getAceModulData( lat, long ) {
    const _url = 'https://api.auroras.live/v1/?type=ace&data=kp&lat=' + lat + '&long=' + long;
    return this._http.get(_url);
  }

  getWeatherData( lat, long ) {
    const _url = 'https://api.auroras.live/v1/?type=weather&lat=' + lat + '&long=' + long;
    return this._http.get(_url);
  }
}
