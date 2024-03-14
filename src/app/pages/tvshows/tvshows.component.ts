import { Component, OnInit } from '@angular/core';
import { IVideoContent } from 'src/app/shared/model/video-content.interface';
import { MovieService } from 'src/app/shared/service/movie.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit{
  
  tvshows: IVideoContent[] = [];
  selectedContent: string | null = null;

  constructor(private movieService: MovieService){
    
  }
  ngOnInit(): void {
    this.movieService.getTvShows().subscribe(res =>{
      
      this.tvshows = res.results as IVideoContent[];
    })
  }

  setHoverMovie(movie: IVideoContent){
    this.selectedContent = movie.title ?? movie.name;
  }

  clearHoverMovie(){
    this.selectedContent = null;
  }
}
