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
import { provideAnimations} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    MovieSliderComponent,
    DescriptionPipe,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  exports: [RouterModule],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
