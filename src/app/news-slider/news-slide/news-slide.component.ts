import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-slide',
  templateUrl: './news-slide.component.html',
  styleUrls: ['./news-slide.component.scss']
})
export class NewsSlideComponent implements OnInit {
  @Input() newsData: {
    author: string,
    publishedAt: string,
    title: string,
    url: string,
    urlToImage: string
  };
  constructor() { }

  ngOnInit(): void {
  }

}
