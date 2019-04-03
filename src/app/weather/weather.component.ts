import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  
  weatherObject: Object;

  forecastObject: Object;
  hourlyObject: Object;
  stationsObject: Object;

  lat: string;
  long: string;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  getWeather() {

    const URL: string = 'https://api.weather.gov/points/' + this.lat + ',' + this.long;

    console.log("Latitude: " + this.lat);
    console.log("Longitude: " + this.long);

    this.data.getWeather(URL).subscribe(data => {
      this.weatherObject = data
      console.log('Weather Object: ' + this.weatherObject);
    });

    this.getWeatherInformation(URL);
  }

  getDefaultWeather() {
    //Latitude and Longitude for Reno, NV
    this.lat = '39.529633';
    this.long = '-119.813805';

    this.getWeather();
  }

  getWeatherInformation(argURL: string) {
    this.getForecast(argURL);
    this.getHourlyForecast(argURL);
    this.getStations(argURL);
  }

  getForecast(argWeatherURL: string) {
    const WeatherURL: string = argWeatherURL + '/forecast';

    this.data.getForecast(WeatherURL).subscribe(data => {
      this.forecastObject = data
      console.log(this.forecastObject);
    });
  }

  getHourlyForecast(argHourlyURL: string) {
    const HourlyURL: string = argHourlyURL + '/forecast/hourly';

    this.data.getHourlyForecast(HourlyURL).subscribe(data => {
      this.hourlyObject = data
      console.log(this.hourlyObject);
    });
  }

  getStations(argStationsURL: string) {
    const StationsURL = argStationsURL + '/stations';

    this.data.getStations(StationsURL).subscribe(data => {
      this.stationsObject = data
      console.log(this.stationsObject);
    });
  }

  clearInputs(){
    this.lat = "";
    this.long = "";
  }
}