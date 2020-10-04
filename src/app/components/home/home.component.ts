import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean;
  errorCarga = false;
  errorMessage: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    }, error => {
        setTimeout(() => {
          this.errorCarga = true;
          this.errorMessage = error.error.error.message;
          this.loading = false;
        }, 1500);
    });
  }

}
