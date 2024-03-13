import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() userImg: string = "";
  navList = ['Home', 'TV Shows', 'Movies', 'Recently Added', ' My List']
}
