import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class OpenWeatherService {
  constructor( private _http: Http ) { }

  getCurrentWeather( lat, long ) {
    const _url = 'http://localhost:8080/weather/current/' + lat + '/' + long;
    return this._http.get(_url);
  }

  getForecastWeather ( lat, long ) {
    const _url = 'http://localhost:8080/weather/forecast/' + lat + '/' + long;
    return this._http.get(_url);
  }

}
