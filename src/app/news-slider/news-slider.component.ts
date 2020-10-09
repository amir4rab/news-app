import { Component, Input, OnInit } from '@angular/core';
import { newsArray } from '../interfaces/newsResponse.interface';
@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.scss']
})
export class NewsSliderComponent implements OnInit {
  activeIndex = 0;
  @Input() slidesData: newsArray[] = [];
  sliderTransform = 'translateX(0px)';
  constructor() {
  }

  ngOnInit(): void {  }
  onSlideChange(): void{  }
  onScrollTo(index: number, sliderOuter: HTMLElement, parentEl: HTMLElement, event: Event): void{
    this.activeIndex = index;
    this.sliderTransform = `translateX(-${+sliderOuter.clientWidth * index}px)`;
    const parentElChildren: HTMLCollection = parentEl.children;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < parentElChildren.length; i++){
      if (parentElChildren[i] && i !== this.activeIndex){
        parentElChildren[i].children[0].classList.remove('active');
      } else {
        parentElChildren[i].children[0].classList.add('active');
      }
    }
  }
}
