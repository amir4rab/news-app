import { Component, OnInit, Input } from '@angular/core';
import { news } from '../interfaces/newsResponse.interface';
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() newsData: news;
  constructor() { }

  ngOnInit(): void {
  }

}
