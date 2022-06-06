import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const API_URL = 'http://localhost:8080/api/';
const API_URL = 'https://administration-movies.herokuapp.com/api/';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(API_URL + 'movies');
  }

}
