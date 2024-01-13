declare var google:any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
        client_id: '583699743152-7744uv4hj2e1ko74a2nm2s2mrfgj9idh.apps.googleusercontent.com',
        callback: (resp: any) => {
          this.handleLogin(resp)
        }
      });

      google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_black',
      size: 'large',
      shape: 'rectangle',
      width: 350
    })
  }

  private decodeToken(token: string){
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response: any){
    if(response){
      //decoding the token
      const payload = this.decodeToken(response.credential);
      //store in session
      sessionStorage.setItem("loggedInUser", JSON.stringify(payload));
      //navigate to home
      this.router.navigate(['home'])
    }
  }
}
