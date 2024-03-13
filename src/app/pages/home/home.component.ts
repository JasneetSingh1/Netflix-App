import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from 'src/app/core/component/header/header.component';
import { AuthService } from 'src/app/shared/service/auth.service';
import { MovieService } from 'src/app/shared/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  

  constructor(private movieService: MovieService, private auth: AuthService){

  }


  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res => {
      console.log(res)
    })
  }
  
  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}
