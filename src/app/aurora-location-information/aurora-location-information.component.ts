import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AceDataModel } from '../model/AuroraLocation';
import { CurrentWeatherModel } from '../model/Weather';
import { AuroraLiveService } from '../services/aurora-live.service';
import { OpenWeatherService } from '../services/open-weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-aurora-location-information',
  templateUrl: './aurora-location-information.component.html',
  styleUrls: ['./aurora-location-information.component.scss']
})
export class AuroraLocationInformationComponent implements OnInit, OnDestroy {

  sub: any;
  ace_data: AceDataModel;
  weather_data: CurrentWeatherModel;
  weather_forecast_data: any = [];
  chart_forecast_data = {
    temp_high: [],
    temp_min: [],
    wind_speed: [],
    date_time: []
  };
  chart: any;
  constructor( private _router: Router, private _activatedRoute: ActivatedRoute,
    private _auroraServices: AuroraLiveService, private _openWeather: OpenWeatherService ) {
    this.sub = this._activatedRoute.params.subscribe(
      params => {
        this.getAceData( params['lat'], params['long'] );
        this.getWeatherData( params['lat'], params['long'] );
        this.getForecastWeatherData( params['lat'], params['long'] );
      }
    );
   }

  getAceData( lat, long ) {
    this._auroraServices.getAceModulData(lat, long)
      .subscribe(
        data => {
          this.ace_data = JSON.parse(data.text());
        },
        err => {
          console.log(err);
        }
      );
  }

  getWeatherData( lat, long ) {
    this._openWeather.getCurrentWeather( lat, long )
      .subscribe(
        data => {
          this.weather_data = JSON.parse(data.text());
        },
        err => {
          console.log(err);
        }
      );
  }

  getForecastWeatherData( lat, long ) {
    this._openWeather.getForecastWeather(lat, long)
      .subscribe(
        data => {
          const json_tmp = JSON.parse(data.text());
          this.weather_forecast_data = json_tmp.list;
          for ( let i = 0; i < this.weather_forecast_data.length; i++ ) {
            this.chart_forecast_data.temp_high.push(this.weather_forecast_data[i].main.temp_max);
            this.chart_forecast_data.temp_min.push(this.weather_forecast_data[i].main.temp_min);
            this.chart_forecast_data.wind_speed.push(this.weather_forecast_data[i].wind.speed);
            this.chart_forecast_data.date_time.push(this.weather_forecast_data[i].dt_txt);
          }
          this.createForecastChart();
        },
        err => {
          console.log(err);
        }
      );
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  createForecastChart() {
    this.chart = new Chart( 'forecast-weather', {
      type: 'line',
      data: {
        labels: this.chart_forecast_data.date_time,
        datasets: [{
          label: 'Temp Max',
          data: this.chart_forecast_data.temp_high,
          borderColor: '#00796B',
          fill: true
        },
          {
            label: 'Temp Min',
            data: this.chart_forecast_data.temp_min,
            borderColor: '#F44336',
            fill: true
          }
        ],
      },
      options: {
        legend: {
          display: true,
          label: {
            text: 'Data'
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
            display: false,
            ticks: {
              fontSize: 0
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

}
