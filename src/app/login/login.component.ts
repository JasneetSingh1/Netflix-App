declare var google:any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    google.accounts.id.initialize({
        client_id: '583699743152-7744uv4hj2e1ko74a2nm2s2mrfgj9idh.apps.googleusercontent.com',
        callback: (resp: any) => {

        }
      });

      google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    })
  }
}
