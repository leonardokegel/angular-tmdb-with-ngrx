import { Component, Input } from '@angular/core';
import { Movie } from '../movie.service';
import { Store } from '@ngrx/store';
import { addFavorite, removeFavorite } from 'src/app/store/movies/movies.actions';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent {

  @Input() movie?: Movie;

  constructor(private store: Store) {}

  addMovie() {
    this.store.dispatch(addFavorite({ movie: this.movie! }));
  }

  removeMovie() {
    this.store.dispatch(removeFavorite({ movie: this.movie! }));
  }
}
