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

}
