import { Component } from '@angular/core';
import { Movie } from 'src/app/movies/movie.service';
import { MoviesService } from 'src/app/movies/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  movies?: Array<Movie>;

  constructor(private moviesService: MoviesService) {

    this.moviesService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }
}
