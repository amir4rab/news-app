import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../interfaces/WeatherResponse.interface';
import { GlobalDataService } from '../globalServices/global-data.service';
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  unit: 'metric' | 'imperial' = 'metric';
  location: string = null;
  constructor(private http: HttpClient, private globalDataService: GlobalDataService) {
  }

  getData(): Observable<WeatherResponse>{
    this.location = this.globalDataService.locationDataGeter('locationCity');
    return  this.http.get<WeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=${this.unit}&appid=e669130f4538ca7afd5cabe4cafffc2d`);
  }
}
