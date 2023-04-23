import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Movie } from '../movie.service';
import { RootState } from 'src/app/store/movies/movies.store';
import { removeFavorite } from 'src/app/store/movies/movies.actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  favorites$: Observable<Movie[]>;

  constructor(private store: Store<RootState>) {
    this.favorites$ = this.store
      .select('favorites')
      .pipe(map((value) => value.favorites));
  }

  removeMovie(movie: Movie) {
    this.store.dispatch(removeFavorite({ movie: movie }));
  }
}
