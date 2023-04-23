import { Movie } from "src/app/movies/movie.service";

export interface MoviesStore {
  favorites: Movie[];
}

export const initialState: MoviesStore = {
  favorites: [],
}

export type RootState = {
  favorites: MoviesStore
}
