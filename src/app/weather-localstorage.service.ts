import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherLocalstorageService {
  constructor() { }

  public saveWeatherObj(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getWeatherObj(key: string) {
    return localStorage.getItem(key);
  }
  public removeWeatherObj(key: string) {
    localStorage.removeItem(key);
  }

  public clearWeatherObjs() {
    localStorage.clear();
  }
}
