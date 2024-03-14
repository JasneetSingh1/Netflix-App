import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { IVideoContent } from 'src/app/shared/model/video-content.interface';
import { MovieService } from 'src/app/shared/service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ])
    ])
  ]
})

export class MoviesComponent implements OnInit{
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  movies: IVideoContent[] = [];
  selectedContent: string | null = null;


  constructor(private movieService: MovieService){
    
  }
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res =>{
     
      this.movies = res.results as IVideoContent[];
    })
  }

  setHoverMovie(movie: IVideoContent){
    this.selectedContent = movie.title ?? movie.name;
  }

  clearHoverMovie(){
    this.selectedContent = null;
  }
}
