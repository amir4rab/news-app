import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../apiServices/weather-api.service';
import { GlobalDataService } from '../globalServices/global-data.service';
import { WeatherResponse } from '../interfaces/WeatherResponse.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  providers: []
})
export class WeatherCardComponent implements OnInit {
  loading = true;
  temp: number;
  feelsLike: number;
  weatherDescription: string;
  cityLocation: string = null;
  constructor(private WeatherApi: WeatherApiService, private globalDataService: GlobalDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  updateData(): void {
    this.getData();
  }
  getData(): void {
    this.loading = true;
    this.WeatherApi.getData().subscribe((responseData: WeatherResponse) => {
      console.log(responseData);
      this.temp = +((+responseData.main.temp).toFixed(0));
      this.weatherDescription = responseData.weather[0].description;
      this.feelsLike =  responseData.main.feels_like;
      this.cityLocation = responseData.name;
      this.loading = false;
    });
  }
}
