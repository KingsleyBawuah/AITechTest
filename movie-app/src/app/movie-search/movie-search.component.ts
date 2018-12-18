import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MovieApiService } from "../movie-api.service";

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private movieapi: MovieApiService) { }
  movieList: Array<any>

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.movieapi.searchMovies().subscribe(data => (this.movieList = data['Search']));
  }
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          this.movieList
        ];
      }

      return [
        this.movieList
      ];
    })
  );


}
