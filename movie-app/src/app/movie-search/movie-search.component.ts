import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  constructor(private breakpointObserver: BreakpointObserver, private movieapi: MovieApiService) { }
  movieList: Array<any>;
  movieTitle = 'matrix';
  resCount: number;
  currentPage: number;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class. Initlizes home page with "Matrix" results.
    this.movieapi
      .initMovies()
      .subscribe(
        data => ((this.movieList = data['Search']), (this.resCount = data['totalResults']))
      );
  }
  //Search movies by title.
  findMovies(): void {
    //Reset page number to 0 in the event of a new search.
    this.currentPage = 1;
    this.movieapi
      .searchMovies(this.movieTitle)
      .subscribe(
        data => ((this.movieList = data['Search']), (this.resCount = data['totalResults']))
      );
  }
  //Move through results using page numbers as a parameter.
  nextMovies(event) {
    this.currentPage = event;

    this.movieapi
      .searchMovies(this.movieTitle, event)
      .subscribe(
        data => ((this.movieList = data['Search']), (this.resCount = data['totalResults']))
      );
    //Scroll back to the top after loading new cards.
    document.querySelector('.mat-sidenav-content').scrollTop = 0;
  }

  /** Based on the screen size render cards*/
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [this.movieList];
      }

      return [this.movieList];
    })
  );
}
