import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuroraLiveService {

  private URL: String = 'https://api.auroras.live/v1/?type=locations';
  constructor( private _http: Http ) { }

  getAuroraHuntingLocations() {
    return this._http.get(this.URL.toString());
  }
}
