import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<MovieHttpResult>('movie/popular').pipe(
      map((data) => data.results),
      map((movies) => movies?.map((movie) => ({...movie, image_full_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}))),
      retry(3),
      catchError(this.handleApiError)
    );
  }

  private handleApiError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Client-side or network error has happened');
    } else {
      console.error(`The API returned with error ${error.status}. Body was:
   ${error.error}`);
    }
    return throwError(() => new Error('Ocorreu um erro na requisição'));
  }
}


export type MovieHttpResult = {
  page?: number
  results?: Array<Movie>
  total_results?: number
  total_pages?: number
}

export type Movie = {
  poster_path?: string
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string
  image_full_url: string;
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}
