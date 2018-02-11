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
    const _final_url = this.getUrl(today, today);
    return this._http.get(_final_url.toString());
  }

  getWeeklyNEO() {
    const _first_date = this.getFirstDate(new Date());
    const tmp = new Date(_first_date);
    const _last_date = new Date(tmp.setTime(_first_date.getTime() + ( 86400000 * 6)));
    console.log('' + _first_date + ': ' + _last_date);
    const _final_url = this.getUrl(this.getDateFormat(_first_date), this.getDateFormat(_last_date));
    return this._http.get(_final_url.toString());
  }

  getLastWeekNEO() {
    const _first_date = this.getFirstDate(new Date(this.getFirstDate( new Date()) - 86400000));
    const tmp = new Date(_first_date);
    const _last_date = new Date(tmp.setTime(_first_date.getTime() + ( 86400000 * 6 )));
    console.log('Last Week : ' + _first_date + ': ' + _last_date);
    const _final_url = this.getUrl(this.getDateFormat(_first_date), this.getDateFormat(_last_date));
    return this._http.get(_final_url.toString());
  }

  getNEOLookUp( reference_id: string ) {
    const url = 'https://api.nasa.gov/neo/rest/v1/neo/' + reference_id + '?api_key=' + this.API_KEY;
    return this._http.get(url);
  }

  getFirstDate( _date: Date ): any {
    const day = _date.getDay() || 7;
    if ( day !== 1 ) {
      _date.setHours( -24 * ( day - 1 ) );
    }
    return _date;
  }

  /*
    NASA API required date format like yyyy-mm-dd
  */
  getDateFormat(date: Date): String {
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
