import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../globalServices/global-data.service';
import { NewsApiService } from '../apiServices/news-api.service';
@Component({
  selector: 'app-news-ui-manager',
  templateUrl: './news-ui-manager.component.html',
  styleUrls: ['./news-ui-manager.component.scss']
})
export class NewsUiManagerComponent implements OnInit {
  newsData = [];
  slideData = [];
  newsCardsData = [];
  slideCount = 5;
  constructor(private globalDataService: GlobalDataService, private newsApiService: NewsApiService) { }

  ngOnInit(): void {
    this.getData();
   }
  getData(): void {
    this.newsApiService.getNewsData().subscribe(responseData => {
      this.slideData.push(...(responseData.articles.slice(0, this.slideCount)));
      this.newsData = responseData.articles;
      this.newsCardsData.push(...(responseData.articles.slice(0 + this.slideCount)));
    });
  }
}
