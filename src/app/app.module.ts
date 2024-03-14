import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './core/component/header/header.component';
import { BannerComponent } from './core/component/banner/banner.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MovieSliderComponent } from './shared/component/movie-slider/movie-slider.component';
import { DescriptionPipe } from './shared/pipe/description.pipe';
import { ImagePipe } from './shared/pipe/image.pipe';
import { BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { RecentlyAddedComponent } from './pages/recently-added/recently-added.component';
import { BrowseComponent } from './shared/component/browse/browse.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    MovieSliderComponent,
    DescriptionPipe,
    ImagePipe,
    MoviesComponent,
    TvshowsComponent,
    RecentlyAddedComponent,
    BrowseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
