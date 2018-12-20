import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  constructor(private http: HttpClient) { }

  api_key = 'f86c0e32';
  //API Call to populate homepage
  initMovies() {
    return this.http.get('http://www.omdbapi.com/?s=matrix&page=1&apikey=' + this.api_key);
  }
  //API Call for searching movies.
  searchMovies(movieTitle: string, pageNum = 1) {
    return this.http.get(
      'http://www.omdbapi.com/?s=' + movieTitle + '&page=' + pageNum + '&apikey=' + this.api_key
    );
  }
}
