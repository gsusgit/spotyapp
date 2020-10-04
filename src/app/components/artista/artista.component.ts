import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artist: any = {};
  topTracks: any = {};
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      this.loading = true;
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string): any {
    this.spotify.getArtist(id).subscribe(artista => {
      console.log(artista);
      this.artist = artista;
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    });
  }

  getTopTracks(id: string): any {
    this.spotify.getTopTracks(id).subscribe((tracks: any) => {
      this.topTracks = tracks;
      setTimeout(() => {
        this.loading = false;
        console.log(tracks);
      }, 1500);
    });
  }

}
