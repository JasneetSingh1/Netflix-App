import { Component, OnInit, inject } from '@angular/core';
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
  
  popularMovies: IVideoContent[] = [];
  constructor(private movieService: MovieService, private auth: AuthService){
    

  }


  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res => {
      console.log(res);
      this.popularMovies = res.results;
    })
  }
  
  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}
