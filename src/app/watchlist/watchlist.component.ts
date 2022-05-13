import { Component } from '@angular/core';
import {IMovie} from '../model/IMovie';
import {MoviesService} from '../service/movies.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html'
})
export class WatchlistComponent {
  public movies: IMovie[] = [];

  constructor(private movieService: MoviesService) {
    this.movies = this.movieService.getResult();
  }
}
