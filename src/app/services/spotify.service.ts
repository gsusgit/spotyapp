import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBUGL18z52K-LTNMM4lMM9fyrypct7m_AIQ5YPOgoxNuDhETEM-g9pi279izeJL6k1aTjKFITgXvA-uNGc'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
  }

  getArtists(termino: string): any {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map(data => data['artists'].items));
  }

}
