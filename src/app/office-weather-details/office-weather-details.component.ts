import { Component, Input, OnInit } from '@angular/core';
import { WeatherDetailModel } from '../weather-detail.model';
import { WeatherLocalstorageService } from '../weather-localstorage.service';

@Component({
  selector: 'app-office-weather-details',
  templateUrl: './office-weather-details.component.html',
  styleUrls: ['./office-weather-details.component.css']
})
export class OfficeWeatherDetailsComponent implements OnInit {
  @Input() freeTextResults: WeatherDetailModel | null;
  storageName: string = "";
  constructor(private localStorage: WeatherLocalstorageService) {
    this.freeTextResults = new WeatherDetailModel();
  }

  ngOnInit(): void {
  }
  
  onBookmark(){
    let weatherList = [];
    let weatherObj = this.freeTextResults as WeatherDetailModel;
    if(this.localStorage.getWeatherObj("weather-list") != null){
      weatherList = JSON.parse(this.localStorage.getWeatherObj("weather-list") as string) as WeatherDetailModel[];
      weatherList.unshift(weatherObj);
    } else {
      weatherList = [weatherObj];
    }
    this.localStorage.saveWeatherObj("weather-list" , JSON.stringify(weatherList));
  }
}
