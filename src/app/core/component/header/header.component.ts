import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navList = ['Home', 'TV Shows', 'Movies', 'Recently Added', ' My List']
}
