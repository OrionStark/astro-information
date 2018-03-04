import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class OpenWeatherService {
  constructor( private _http: Http ) { }

  getHeaders(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('access_mode', 'normalaccess');
    const options = new RequestOptions({headers: headers});
    return options;
  }

  getCurrentWeather( lat, long ) {
    const _url = '/api/v1/weather/current/' + lat + '/' + long;
    return this._http.get(_url, this.getHeaders());
  }

  getForecastWeather ( lat, long ) {
    const _url = '/api/v1/weather/forecast/' + lat + '/' + long;
    return this._http.get(_url, this.getHeaders());
  }

}
