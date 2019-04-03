import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getWeather(argWeatherURL: string) {
    return this.http.get(argWeatherURL);
  }

  getForecast(argForecastURL: string) {
    return this.http.get(argForecastURL);
  }

  getHourlyForecast(argHourlyURL: string) {
    return this.http.get(argHourlyURL);
  }

  getStations(argStationsURL: string) {
    return this.http.get(argStationsURL);
  }
}