import { Component, OnInit, inject } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { HeaderComponent } from 'src/app/core/component/header/header.component';
import { IVideoContent } from 'src/app/shared/model/video-content.interface';
import { AuthService } from 'src/app/shared/service/auth.service';
import { MovieService } from 'src/app/shared/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  bannerDetail$ = new Observable<any>();
  bannerVideo$ = new Observable<any>();
  
  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  
  nowPlayingMovies: IVideoContent[] = [];
 
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),

    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
  
    this.movieService.getTopRated()
  ];

  constructor(private movieService: MovieService, private auth: AuthService){
  }



  
  ngOnInit(): void {
    forkJoin(this.sources)
    .pipe(
      map(([movies, tvShows, nowPlaying, upcoming, topRated])=>{
        return {movies, tvShows, nowPlaying, upcoming, topRated}
      })
    ).subscribe((res:any)=>{
      this.movies = res.movies.results as IVideoContent[];
      this.tvShows = res.tvShows.results as IVideoContent[];
     
      this.nowPlayingMovies = res.nowPlaying.results as IVideoContent[];
      this.upcomingMovies = res.upcoming.results as IVideoContent[];
    
      this.topRatedMovies = res.topRated.results as IVideoContent[];
    })
  }

  getMovieKey() {
    this.movieService.getBannerVideo(this.movies[0].id)
    .subscribe(res=>{
      console.log(res);
    })
  }
  
  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}
