import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OfficeLocationComponent } from './office-location/office-location.component';
import { OfficeWeatherDetailsComponent } from './office-weather-details/office-weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficeLocationComponent,
    OfficeWeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
