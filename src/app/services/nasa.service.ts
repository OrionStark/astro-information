import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class NasaService {

  private API_KEY: String = '8KMuajrdQtiYCkd3bR4D3XnNC17yZUm3qoqUKzZX';
  constructor( private _http: Http ) { }

  /*
    Get NEO updates for today from NASA API
  */
  getTodayNEO() {
    const today = this.getDateFormat(new Date());
    const _final_url = this.getUrl(today.substring(0, 10), today.substring(0, 10));
    return this._http.get(_final_url.toString());
  }

  getTodayStringDate(): String {
    return this.getDateFormat(new Date());
  }

  /*
    NASA API required date format like yyyy-mm-dd
  */
  private getDateFormat(date: Date): String {
    let month = '' + ( date.getMonth() + 1 );
    let day = '' + date.getDate();
    const year = '' + date.getFullYear();
    if ( month.length < 2 ) {
      month = '0' + month;
    }
    if ( day.length < 2 ) {
      day = '0' + day;
    }

    return [ year, month, day ].join('-');
  }

  /*
    Get NEO depending on selected start-end date from NASA API
  */
  getByDate( start_date: Date, end_date: Date ) {
    const _start_date = this.getDateFormat(start_date);
    const _end_date = this.getDateFormat(end_date);
    const _final_url = this.getUrl(_start_date, _end_date);
    return this._http.get(_final_url.toString());
  }

  private getUrl(start_date: String, end_date: String): String {
    const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + start_date + '&end_date=' + end_date + '&api_key=' + this.API_KEY;
    return url;
  }

}
