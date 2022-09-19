import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, of, retry, retryWhen, switchMap } from 'rxjs';
import { WeatherApiService } from '../weather-api.service';
import { WeatherDetailModel } from '../weather-detail.model';
import { WeatherLocalstorageService } from '../weather-localstorage.service';

@Component({
  selector: 'app-office-location',
  templateUrl: './office-location.component.html',
  styleUrls: ['./office-location.component.css']
})
export class OfficeLocationComponent implements OnInit {

  freeTextSearch = new FormControl('');
  searchTerm: string | null = "";
  locationSearchResults: WeatherDetailModel | null = null;
  isLoading: boolean;
  displayBookmark: boolean;
  bookmarks: WeatherDetailModel[] = [];
  showOrHideBookmarkButton = "Display Bookmarks";

  constructor(
    private readonly localStorageService: WeatherLocalstorageService,
    private readonly _weatherApiService: WeatherApiService) {
    this.isLoading = false;
    this.displayBookmark = false;
  }
  ngOnChanges() {
    this.bookmarks = JSON.parse(this.localStorageService.getWeatherObj("weather-list") as string) as WeatherDetailModel[];
  }
  onSelect(bookMarkedWeather: WeatherDetailModel) {
    this.locationSearchResults = bookMarkedWeather;
  }
  ngOnInit() {
    this.bookmarks = JSON.parse(this.localStorageService.getWeatherObj("weather-list") as string) as WeatherDetailModel[];

    this
      .freeTextSearch
      .valueChanges
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .pipe(switchMap(term => {
        return this
          ._weatherApiService
          .getLocationWeatherDetails(term).pipe(
            catchError(error => {
              this.searchTerm = this.freeTextSearch.value;
              this.locationSearchResults = null;
              return of(null);
            }))
      })).subscribe({
        next: (searchResults) => {
          this.searchTerm = this.freeTextSearch.value;
          this.locationSearchResults = searchResults;
        },
        error: (e) => {
          this.searchTerm = this.freeTextSearch.value;
          this.locationSearchResults = null;
        },
        complete: () => console.info('complete')
      });
  }

  showBookmark() {
    if (!this.displayBookmark) {
      this.showOrHideBookmarkButton = "Hide Bookmarks";
    } else {
      this.showOrHideBookmarkButton = "Display Bookmarks";
    }
    this.displayBookmark = !this.displayBookmark;
  }
}
