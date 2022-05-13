import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MoviesService} from '../service/movies.service';
import {ISearch} from '../model/ISearch';
import {IMovie} from '../model/IMovie';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(private fb: FormBuilder, private movieService: MoviesService) {
  }

  public ngOnInit(): void {
    this.initSearchForm();
  }

  private initSearchForm(): void {
    this.searchForm = this.fb.group({
      title: '',
      year: '',
      type: '',
    });
  }

  public search(): void {
    const search = {...this.searchForm.value} as ISearch;
    this.movieService.getMovie(search).pipe().subscribe((value: IMovie) => {
      this.movieService.storeMovie(value);
    });
  }
}
