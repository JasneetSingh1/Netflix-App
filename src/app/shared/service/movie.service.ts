import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  options = {};

  constructor(private http: HttpClient){
    this.options = {

    params: {
      include_adult: 'false',
      include_video: 'true',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc'
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTNlNGMwNTJmMTA3ZTA4MDcwMzMxMmJlZWEyMjczNCIsInN1YiI6IjY1ZjIzMTRmZWVhMzRkMDE2NDEzN2UxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u9dKxdpk-lGB4mV_18VmUBk19AEJBxyGi5jLD8Ap48o'
    }
  }

  }

  getMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', this.options)
  }

  
  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', this.options)
  }

  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', this.options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, this.options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, this.options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, this.options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', this.options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', this.options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', this.options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', this.options)
  }

}
