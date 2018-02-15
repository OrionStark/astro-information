import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class OpenWeatherService {

  private API_KEY = '99ff815581920ce4a745369635fae80f';
  constructor( private _http: Http ) { }

  getCurrentWeather( lat, long ) {
    const _url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + this.API_KEY;
    return this._http.get(_url);
  }

  getForecastWeather ( lat, long ) {
    const _url = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=' + this.API_KEY;
    return this._http.get(_url);
  }

}
