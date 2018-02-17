import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class NasaService {
  constructor( private _http: Http ) { }
  getTodayNEO() {
    return this._http.get('http://localhost:8080/neo/today');
  }

  getWeeklyNEO() {
    return this._http.get('http://localhost:8080/neo/weekly');
  }

  getLastWeekNEO() {
    return this._http.get('http://localhost:8080/neo/lastweek');
  }

  getNEOLookUp( reference_id: string ) {
    return this._http.get('http://localhost:8080/neo/' + reference_id);
  }

  getByDate( start_date: Date, end_date: Date ) {
    return this._http.get('http://localhost:8080/neo/bydate/' + this.getDateFormat(start_date) + '/' + this.getDateFormat(end_date));
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
