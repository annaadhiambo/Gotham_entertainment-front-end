import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { baseUrl } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private Http: HttpClient) { }

  getMoviesData(data): Observable<any> {
    return this.Http.get(`https://cors-anywhere.herokuapp.com/${baseUrl}movies/`, data)
      .pipe(catchError(this.errorHandler));
  }
  getMovieById(id): Observable<any> {
    const url = `https://cors-anywhere.herokuapp.com/${baseUrl}movies/${id}`
    return this.Http.get(url)
      .pipe(catchError(this.errorHandler));

  }
  errorHandler(error) {
    return throwError(error.message || 'Server Error');
  }
}

