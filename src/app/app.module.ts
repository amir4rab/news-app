import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { CardComponent } from './utilities/card/card.component';
import { NewsSliderComponent } from './news-slider/news-slider.component';
import { NewsSlideComponent } from './news-slider/news-slide/news-slide.component';
import { SlideComponent } from './utilities/slide/slide.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { LoadingAnimationComponent } from './utilities/loading-animation/loading-animation.component';
import { NewsUiManagerComponent } from './news-ui-manager/news-ui-manager.component';
import { GlobalDataService } from './globalServices/global-data.service';
import { ShotenPipe } from './pipes/shorten.pipe';
import { RemoveAuthor } from './pipes/removeAuthor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherCardComponent,
    CardComponent,
    NewsSliderComponent,
    NewsSlideComponent,
    SlideComponent,
    NewsCardComponent,
    LoadingAnimationComponent,
    NewsUiManagerComponent,
    ShotenPipe,
    RemoveAuthor
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
