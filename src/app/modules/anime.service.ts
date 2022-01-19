import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Anime } from 'src/app/entities/anime/anime';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  apibaseURL = 'https://api.jikan.moe/v3/';
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

  // HttpClient API get() method => Fetch all time airing anime
  getTopAllTimeAiring(): Observable<Anime> {
    return this.http.get<Anime>(this.apibaseURL + 'top/anime/1/airing')
    .pipe(
      retry(1)
    )
  }
    // HttpClient API get() method => Fetch all time airing anime
    getTopUpcoming(): Observable<Anime> {
      return this.http.get<Anime>(this.apibaseURL + 'top/anime/1/upcoming')
      .pipe(
        retry(1)
      )
    }
}
