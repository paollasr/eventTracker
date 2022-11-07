import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
//import { ArtistsService } from 'src/app/artists.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Artist, ArtistsService } from 'src/app/artists.service';

@Component({
  selector: 'app-artist',
  templateUrl: './list-fav-artists.component.html',
  styleUrls: ['./list-fav-artists.component.css'],
})


export class ListFavArtistsComponent{

  title = "Favorite Artists";
  apiFavArtists: Observable<Artist[]>;

  // artists = ['Coldplay', 'Iron Man', 'Mettalica', 'Nina Simone'];

  constructor(public artistsService: ArtistsService) {
    
    this.apiFavArtists = this.artistsService.getfavArtists().pipe(
      map(spotifyResponse => spotifyResponse.artists)
    );

    this.apiFavArtists.subscribe( artist => {
      console.log(this.apiFavArtists);
    })
  }



}
