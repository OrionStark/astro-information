import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LocationModel } from '../model/Location';

@Injectable()
export class AuroraLiveService {

  private URL: String = 'http://localhost:8080/aurora/locations'; // Locations Hunting Aurora
  constructor( private _http: Http ) { }

  getAuroraHuntingLocations() {
    return this._http.get(this.URL.toString());
  }

  getAceModulData( location: LocationModel ) {
    const _url = 'http://localhost:8080/aurora/ace/data/' + location.lat + '/' + location.long;
    return this._http.get(_url);
  }

  getWeatherData( lat, long ) {
    const _url = 'https://api.auroras.live/v1/?type=weather&lat=' + lat + '&long=' + long;
    return this._http.get(_url);
  }
}
