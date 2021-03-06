import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string): any {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDbDcuegGE0DB_vvWbO5ZYit6oJ3zXX8Pd5SsXo_nDXyUSkpKcAjqlgP3bzzf0ccyXqJMupwzIoyC5SexM'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
  }

  getArtists(termino: string): any {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map(data => data['artists'].items));
  }

  getArtist(id: string): any {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): any {
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe(map(data => data['tracks']));
  }

}
