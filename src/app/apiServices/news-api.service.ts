import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalDataService } from '../globalServices/global-data.service';
import { NewsResponse } from '../interfaces/NewsResponse.interface';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  location: string;
  constructor(private http: HttpClient, private globalDataService: GlobalDataService){  }
  getNewsData(): Observable<NewsResponse>{
    this.location = this.globalDataService.locationDataGeter('locationCountryCode');
    return this.http.get<NewsResponse>(`http://newsapi.org/v2/top-headlines?country=${this.location}&apiKey=171d44efc25346f4800fb87c06ea9352`);
  }
}
