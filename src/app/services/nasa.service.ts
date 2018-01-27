import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class NasaService {

  private API_KEY: String = '8KMuajrdQtiYCkd3bR4D3XnNC17yZUm3qoqUKzZX';
  constructor( private _http: Http ) { }

  getTodayNEO() {
    const today_date = new Date();
    const today = today_date.toISOString();
    const _final_url = this.getUrl(today.substring(0, 10), today.substring(0, 10));
    return this._http.get(_final_url.toString());
  }

  getTodayStringDate(): String {
    return new Date().toISOString().substring(0, 10);
  }

  getByDate( start_date: Date, end_date: Date ) {
    const _start_ISO_date = start_date.toISOString().substring(0, 10);
    const _end_ISO_date = end_date.toISOString().substring(0, 10);
    const _final_url = this.getUrl(_start_ISO_date, _end_ISO_date);
    return this._http.get(_final_url.toString());
  }

  private getUrl(start_date: String, end_date: String): String {
    const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + start_date + '&end_date=' + end_date + '&api_key=' + this.API_KEY;
    return url;
  }

}
