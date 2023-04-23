import { Movie } from './../../movies/movie.service';
import { createAction, props } from '@ngrx/store';

export const addFavorite = createAction(
  '[Movies] Add Favorite',
  props<{ movie: Movie }>()
);

export const removeFavorite = createAction(
  '[Movies] Remove Favorite',
  props<{ movie: Movie }>()
);
