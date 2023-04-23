import { addFavorite, removeFavorite } from "./movies.actions";
import { initialState } from "./movies.store";
import { on, createReducer } from '@ngrx/store'

export const movieReducer = createReducer(
  initialState,
  on(addFavorite, (state, { movie }) => ({
    ...state,
    favorites: [...state.favorites, movie]
  })),
  on(removeFavorite, (state, { movie: { id } }) => ({
    ...state,
    favorites: state.favorites.filter((movie) => movie.id !== id)
  }))
);
