import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { NasaService } from '../services/nasa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  object_data = {
    date_date: [],
    objects_value: []
  };
  lastWeek_object_data = {
    date_date: [],
    objects_value: []
  };
  sub: any = null;
  chart = [];
  sec_chart = [];
  third_chart = [];
  weekly_statistics_data: any;
  data_set = this.object_data != null && this.lastWeek_object_data != null;

  constructor( private _route: ActivatedRoute, private _nasaServices: NasaService ) {
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
        let date = this._nasaServices.getFirstDate(new Date());
        let count = 0;
        for ( let i = 0; i < 7; i++ ) {
          date = new Date(date.setDate(date.getDate() + count));
          this.object_data.date_date.push(this._nasaServices.getDateFormat(date))  ;
          this.object_data.objects_value.push(body_JSON.near_earth_objects[this._nasaServices.getDateFormat(date).toString()].length);
          count = 1;
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
        for ( let i = 0; i < 7; i++ ) {
          date = new Date(date.setDate(date.getDate() + count));
          this.lastWeek_object_data.date_date.push(this._nasaServices.getDateFormat(date))  ;
          this.lastWeek_object_data.objects_value
            .push(body_JSON.near_earth_objects[this._nasaServices.getDateFormat(date).toString()].length);
          count = 1;
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

  onDestroy() {
    this.sub.unsubscribe();
  }

}
