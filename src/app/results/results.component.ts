import {Component} from '@angular/core';
import {IMovie} from '../model/IMovie';
import {MoviesService} from '../service/movies.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {
  public movies: IMovie[] = [];

  constructor(private movieService: MoviesService) {
    this.movies = this.movieService.getResult();
  }
}
