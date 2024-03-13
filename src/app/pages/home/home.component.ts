import { Component, inject } from '@angular/core';
import { HeaderComponent } from 'src/app/core/component/header/header.component';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  auth = inject (AuthService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}
