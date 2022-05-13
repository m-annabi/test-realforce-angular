import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {MoviesService} from './movies.service';
import {HttpClientModule} from '@angular/common/http';
import {MoviesMock} from '../mock/movies.mock';
import {IMovie} from '../model/IMovie';

describe('MoviesService', () => {
  let service: MoviesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MoviesService);
    service.setResult(MoviesMock.MOCK, false);
  });

  it('should be refresh', fakeAsync(() => {
    // Given
    const movie = {
      Title: 'string',
        Year: 'string',
      Rated: 'string',
      Released: 'string',
      Runtime: 'string',
      Genre: 'string',
      Director: 'string',
      Writer: 'string',
      Actors: 'string',
      Plot: 'string',
      Language: 'string',
      Country: 'string',
      Awards: 'string',
      Poster: 'string',
      Ratings: [
      {
        Source: 'string',
        Value: 'string',
      },
      {
        Source: 'string',
        Value: 'string',
      },
      {
        Source: 'string',
        Value: 'string',
      }
    ],
      Metascore: 'string',
      imdbRating: 'string',
      imdbVotes: 'string',
      imdbID: '1',
      Type: 'string',
      DVD: 'string',
      BoxOffice: 'string',
      Production: 'string',
      Website: 'string',
      Response: 'string',
      listed: false
    };
    // When
    service.refreshMovieStatus(movie as IMovie);
    tick(50);
    expect(service.getResult()[0]).toBeTruthy();
  }));
});
