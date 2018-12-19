import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MovieApiService } from '../movie-api.service';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  constructor(private breakpointObserver: BreakpointObserver, private movieapi: MovieApiService) { }
  movieList: Array<any>;
  movieTitle = "matrix";
  resCount: number;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class. Initlizes home page with "Matrix" results.
    this.movieapi.initMovies().subscribe(
      data => ((this.movieList = data['Search']), (this.resCount = data['totalResults']))
    );
  }
  //Search movies by title.
  findMovies(): void {
    this.movieapi
      .searchMovies(this.movieTitle)
      .subscribe(
        data => ((this.movieList = data['Search']), (this.resCount = data['totalResults']))
      );
  }
  //Move through results
  nextMovies(event){
    console.log(event.pageIndex)
    this.movieapi
      .searchMovies(this.movieTitle, event.pageIndex + 1)
      .subscribe(
        data => ((this.movieList = data['Search']), (this.resCount = data['totalResults']))
      );
  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [this.movieList];
      }

      return [this.movieList];
    })
  );
}
