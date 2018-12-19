import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  api_key = 'f86c0e32';
  movieTitle;
  pageNum = 1;

  initMovies() {
    return this.http.get('http://www.omdbapi.com/?s=matrix&page=1&apikey=' + this.api_key);
  }

  searchMovies(movieTitle: string) {
    console.log(movieTitle);
    return this.http.get('http://www.omdbapi.com/?s=' + movieTitle + '&apikey=' + this.api_key);
  }
}
