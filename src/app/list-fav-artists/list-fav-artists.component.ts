import { Component} from '@angular/core';
import { ArtistsService } from 'src/app/artists.service';

@Component({
  selector: 'app-artist',
  templateUrl: './list-fav-artists.component.html',
  styleUrls: ['./list-fav-artists.component.css'],
})


export class ListFavArtistsComponent {
  title = "Favorite Artists";

  constructor(private artists:ArtistsService) {
    
  }

}
