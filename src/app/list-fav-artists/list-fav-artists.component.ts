import { Component} from '@angular/core';
//import { ArtistsService } from 'src/app/artists.service';
import { Observable } from 'rxjs';
import { Artist, ArtistsService } from 'src/app/artists.service';

@Component({
  selector: 'app-artist',
  templateUrl: './list-fav-artists.component.html',
  styleUrls: ['./list-fav-artists.component.css'],
})


export class ListFavArtistsComponent {
  title = "Favorite Artists";
  apiFavArtists: Observable<Artist[]>;

  constructor(private artistsService: ArtistsService) {
    this.apiFavArtists = this.artistsService.getfavArtists();

    this.apiFavArtists.subscribe( artist => {
      console.log(this.apiFavArtists);
    })
  }



}
