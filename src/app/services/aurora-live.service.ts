import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LocationModel } from '../model/Location';

@Injectable()
export class AuroraLiveService {

  private URL: String = '/api/v1/aurora/locations'; // Locations Hunting Aurora
  constructor( private _http: Http ) { }

  getAuroraHuntingLocations() {
    return this._http.get(this.URL.toString());
  }

  getAceModulData( location: LocationModel ) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('access_mode', 'normalaccess');
    const options = new RequestOptions({headers: headers});
    const _url = '/api/v1/aurora/ace/data/' + location.lat + '/' + location.long;
    return this._http.get(_url, options);
  }
}
