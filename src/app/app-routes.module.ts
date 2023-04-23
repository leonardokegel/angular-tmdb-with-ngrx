import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { FavoritesComponent } from './movies/favorites/favorites.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot([
    {
      path: "", component: MoviesListComponent
    },
    {
      path: "movies", component: MoviesListComponent
    },
    {
      path: 'favorites', component: FavoritesComponent
    }
  ])],
})
export class ApplicationRoutesModule {}
