import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const THE_MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd416af5d4faee64e25ab001d87aab5c3';

@Injectable()
class MoviesApiInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const customReq = req.clone({
      url: `${THE_MOVIE_DB_BASE_URL}${req.url}?api_key=${API_KEY}`,
    });
    return next.handle(customReq);
  }
}

export const movieApiInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: MoviesApiInterceptor, multi: true },
];
