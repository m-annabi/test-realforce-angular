import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../model/IMovie';
import {MoviesService} from '../service/movies.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() movie: IMovie;
  @Input() type: 'toWatch' | 'result'; // no Enum because no needed in other places

  constructor(private movieService: MoviesService ) { }

  public updateMovieStatus(): void {
    this.movie.listed = !this.movie.listed;
    this.movieService.refreshMovieStatus(this.movie);
  }

  public naviagateTo(): void {
    window.open(this.movie.Poster, '_blank');
  }
}
