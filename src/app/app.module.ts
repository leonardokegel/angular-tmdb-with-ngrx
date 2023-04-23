import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { movieApiInterceptorProvider } from './interceptors/movies-api.interceptor';
import { MoviesModule } from './movies/movies.module';
import { RouterModule } from '@angular/router';
import { ApplicationRoutesModule } from './app-routes.module';
import { StoreModule } from '@ngrx/store'
import { movieReducer } from './store/movies/movies.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MoviesModule,
    RouterModule,
    ApplicationRoutesModule,
    CommonModule,
    StoreModule.forRoot({ favorites: movieReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [movieApiInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
