import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { IVideoContent } from '../../model/video-content.interface';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MovieSliderComponent implements OnInit, AfterViewInit {
  
  @Input() videoContents: IVideoContent[] = [];
  @Input() title: string = "";
  
  @ViewChild('swiperContainer') swiperCOntainer!: ElementRef

  selectedContent: string | null = null;
 
  ngAfterViewInit(): void {
   this.inItSwiper();
  }
  
  ngOnInit(): void {
    
  }

  private inItSwiper(){
    return new Swiper(this.swiperCOntainer.nativeElement,{
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: false,
      loop: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 8,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    })
  }

  setHoverMovie(movie: IVideoContent){
    this.selectedContent = movie.title ?? movie.name;
  }

  clearHoverMovie(){
    this.selectedContent = null;
  }
}
