import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeWeatherDetailsComponent } from './office-weather-details.component';

describe('OfficeWeatherDetailsComponent', () => {
  let component: OfficeWeatherDetailsComponent;
  let fixture: ComponentFixture<OfficeWeatherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeWeatherDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeWeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
