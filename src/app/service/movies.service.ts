import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {IMovie} from '../model/IMovie';
import {ISearch} from '../model/ISearch';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  private searchResult = new BehaviorSubject<IMovie[]>([]);

  public setResult(movies: IMovie[], storeProp: boolean = false): void {
    if (storeProp) {
      localStorage.setItem('storedProp', JSON.stringify(movies));
    }
    this.searchResult.next(movies);
  }

  public getResult(): IMovie[] {
    return this.searchResult.getValue();
  }

  constructor(private http: HttpClient) {
    const storedProp = localStorage.getItem('storedProp');
    if (storedProp) {
      this.setResult(JSON.parse(storedProp), false);
    }
  }

  public getMovie(search: ISearch): Observable<IMovie> {
    return this.http.get<IMovie>(`http://www.omdbapi.com/?t=${search.title}&type=${search.type}&year=${search.year}}&apikey=1681ca10`)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public refreshMovieStatus(movie: IMovie): void {
    const movies = this.getResult();
    movies.map((movieArray: IMovie) => {
      if (movieArray.imdbID === movie.imdbID) {
        return {...movieArray, listed: true};
      }
      this.setResult(movies, true);
    });
  }

  public storeMovie(movie: IMovie): void {
    const movies = this.getResult();
    if (movie && movie !== movies.find(value => value !== movie)) {
      movies.push(movie);
    }
    this.setResult(movies, true);
  }
}
