import { Component, OnInit } from '@angular/core';
import { IVideoContent } from 'src/app/shared/model/video-content.interface';
import { MovieService } from 'src/app/shared/service/movie.service';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {
  
  recentlyAdded: IVideoContent[] = [];
  selectedContent: string | null = null;

  constructor(private movieService: MovieService){
    
  }
  ngOnInit(): void {
    this.movieService.getNowPlayingMovies().subscribe(res =>{
      console.log(res)
      this.recentlyAdded = res.results as IVideoContent[];
    })
  }

  setHoverMovie(movie: IVideoContent){
    this.selectedContent = movie.title ?? movie.name;
  }

  clearHoverMovie(){
    this.selectedContent = null;
  }
}{

}
