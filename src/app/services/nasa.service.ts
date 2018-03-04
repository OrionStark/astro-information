import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class NasaService {
  constructor( private _http: Http ) { }
  getTodayNEO() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('access_mode', 'normalaccess');
    const options = new RequestOptions({headers: headers});
    return this._http.get('/api/v1/neo/today', options);
  }

  getWeeklyNEO() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('access_mode', 'normalaccess');
    const options = new RequestOptions({headers: headers});
    return this._http.get('/api/v1/neo/weekly', options);
  }

  getLastWeekNEO() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('access_mode', 'normalaccess');
    const options = new RequestOptions({headers: headers});
    return this._http.get('/api/v1/neo/lastweek', options);
  }

  getNEOLookUp( reference_id: string ) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('access_mode', 'normalaccess');
    const options = new RequestOptions({headers: headers});
    return this._http.get('/api/v1/neo/' + reference_id, options);
  }

  getByDate( start_date: Date, end_date: Date ) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('access_mode', 'normalaccess');
    const options = new RequestOptions({headers: headers});
    return this._http.get('/api/v1/neo/bydate/' + start_date.toString() + '/' + end_date.toString(), options);
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
  getFirstDate( _date ) {
    const day = _date.getDay() || 7;
    if ( day !== 1 ) {
      _date.setHours( -24 * ( day - 1 ) );
    }
    return _date;
}

}
