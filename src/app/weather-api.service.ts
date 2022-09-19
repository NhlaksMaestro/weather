import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDetailModel } from './weather-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private weatherApiUri: string;
  private key: string;
  constructor(private readonly httpClient: HttpClient) {
    this.weatherApiUri  = 'http://api.weatherapi.com/v1';
    this.key = "a7bd393a83cf473f900115724221509";
  }

  getLocationWeatherDetails(location: string|null): Observable<WeatherDetailModel> {
    return this.httpClient.get<WeatherDetailModel>(`${this.weatherApiUri}/current.json?key=${this.key}&q=${location}`);
  }
}
