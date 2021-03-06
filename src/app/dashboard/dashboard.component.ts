import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NasaService } from '../services/nasa.service';
import {  } from '../model/NEO';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  object_data = {
    date_date: [],
    objects_value: [],
    hazardous_value: []
  };
  lastWeek_object_data = {
    date_date: [],
    objects_value: [],
    hazardous_value: []
  };
  sub: any = null;
  chart = [];
  sec_chart = [];
  today_NEO: any;
  third_chart = [];
  weekly_statistics_data: any;
  hazardous_potentially_chart = [];


  constructor(private dialog: MatDialog, private _route: ActivatedRoute, private _nasaServices: NasaService ) {
  }

  ngOnInit() {
    this.getWeeklyStatistics();
  }

  ngAfterViewInit() {
  }

  getWeeklyStatistics() {
    this.sub = this._nasaServices.getWeeklyNEO()
    .subscribe(
      data => {
        const body_JSON = JSON.parse(data.text());
        this.today_NEO = body_JSON.near_earth_objects[this._nasaServices.getDateFormat(new Date()).toString()];
        let date = this._nasaServices.getFirstDate(new Date());
        let count = 0;
        let hazardous_count = 0;
        for ( let i = 0; i < 7; i++ ) {
          date = new Date(date.setDate(date.getDate() + count));
          this.object_data.date_date.push(this._nasaServices.getDateFormat(date))  ;
          this.object_data.objects_value.push(body_JSON.near_earth_objects[this._nasaServices.getDateFormat(date).toString()].length);
          for ( let j = 0; j < body_JSON.near_earth_objects[this._nasaServices.getDateFormat(date).toString()].length; j++ ) {
            if ( body_JSON.near_earth_objects[this._nasaServices.getDateFormat(date).toString()][j].is_potentially_hazardous_asteroid ) {
              hazardous_count += 1;
            }
          }
          this.object_data.hazardous_value.push(hazardous_count);
          count = 1;
          hazardous_count = 0;
        }
        this.createThisWeekChart();
        this.getLastWeekStatistics();
      },
      err => {
        console.log(err);
      }
    );
  }

  getLastWeekStatistics() {
    this._nasaServices.getLastWeekNEO()
    .subscribe(
      data => {
        const body_JSON = JSON.parse(data.text());
        let date = this._nasaServices.getFirstDate(new Date(this._nasaServices.getFirstDate( new Date()) - 86400000));
        let count = 0;
        let hazardous_count = 0;
        for ( let i = 0; i < 7; i++ ) {
          date = new Date(date.setDate(date.getDate() + count));
          this.lastWeek_object_data.date_date.push(this._nasaServices.getDateFormat(date))  ;
          this.lastWeek_object_data.objects_value
            .push(body_JSON.near_earth_objects[this._nasaServices.getDateFormat(date).toString()].length);
          for ( let j = 0; j < body_JSON.near_earth_objects[this._nasaServices.getDateFormat(date).toString()].length; j++ ) {
            if ( body_JSON.near_earth_objects[this._nasaServices.getDateFormat(date).toString()][j].is_potentially_hazardous_asteroid ) {
              hazardous_count += 1;
            }
          }
          this.lastWeek_object_data.hazardous_value.push(hazardous_count);
          count = 1;
          hazardous_count = 0;
        }
        this.createLastWeekChart();
      },
      err => {
        console.log(err);
      }
    );
  }

  createThisWeekChart() {
    this.chart = new Chart( 'weekly_stats', {
      type: 'line',
      data: {
        labels: this.object_data.date_date,
        datasets: [{
          label: 'Objects this week',
          data: this.object_data.objects_value,
          borderColor: '#3cba9f',
          fill: true
        }],
      },
      options: {
        legend: {
          display: true,
          label: {
            text: 'Objects count'
          }
        },
        animation: {
          duration: 500,
      },
      hover: {
          animationDuration: 200,
      },
      responsiveAnimationDuration: 500,
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              fontSize: 9
            }
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    } );
  }

  createLastWeekChart() {
    this.sec_chart = new Chart( 'last_weekly_stats', {
      type: 'line',
      data: {
        labels: this.lastWeek_object_data.date_date,
        datasets: [{
          label: 'Objects last week',
          data: this.lastWeek_object_data.objects_value,
          borderColor: '#1E88E5',
          fill: true
        }],
      },
      options: {
        legend: {
          display: true,
          label: {
            text: 'Objects count'
          }
        },
        animation: {
          duration: 500,
      },
      hover: {
          animationDuration: 200,
      },
      responsiveAnimationDuration: 500,
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              fontSize: 9
            }
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    } );
    this.createNeoBeetweenWeeksChart();
    this.createHazardousChart();
  }

  createNeoBeetweenWeeksChart() {
    this.third_chart = new Chart( 'weekly_stats_and_last', {
      type: 'line',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Objects this week',
          data: this.object_data.objects_value,
          borderColor: '#1E88E5',
          fill: true
        },
          {
            label: 'Object last week',
            data: this.lastWeek_object_data.objects_value,
            borderColor: '#F4511E',
            fill: true
          }
        ],
      },
      options: {
        legend: {
          display: true,
          label: {
            text: 'Objects count'
          }
        },
        animation: {
          duration: 500,
      },
      hover: {
          animationDuration: 200,
      },
      responsiveAnimationDuration: 500,
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              fontSize: 9
            }
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    } );
  }

  createHazardousChart() {
    this.hazardous_potentially_chart = new Chart( 'hazardous_potentially', {
      type: 'line',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'This week',
          data: this.object_data.hazardous_value,
          borderColor: '#00796B',
          fill: true
        },
          {
            label: 'Last week',
            data: this.lastWeek_object_data.hazardous_value,
            borderColor: '#F44336',
            fill: true
          }
        ],
      },
      options: {
        legend: {
          display: true,
          label: {
            text: 'Objects count'
          }
        },
        animation: {
          duration: 500,
      },
      hover: {
          animationDuration: 200,
      },
      responsiveAnimationDuration: 500,
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              fontSize: 9
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              fontSize: 9
            }
          }],
        }
      }
    } );
  }

  onDestroy() {
    this.sub.unsubscribe();
  }

  moreNEOInformation(data: any) {
    const dialogref = this.dialog.open(NeoDashDialog, {
      width: '400px',
      minWidth: '280px',
      data: data
    });
  }

}
@Component({
  selector: 'app-neo-dashboard',
  templateUrl: 'neo-dashboard.html',
  styleUrls: [ './neo-dialog.scss' ]
})
// tslint:disable-next-line:component-class-suffix
export class NeoDashDialog {
  constructor(private mat_dialog_ref: MatDialogRef<NeoDashDialog>,
      private _route: Router, @Inject(MAT_DIALOG_DATA) public object: any ) {
      console.log(object);
  }

  closeButtonClicked() {
      this.mat_dialog_ref.close();
  }

  gotToInformation(url: string) {
      this.mat_dialog_ref.close();
      this._route.navigate(['/neo-information', { id: this.object.neo_reference_id }]);
  }

}
