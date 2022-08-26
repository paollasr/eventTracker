import { Component} from '@angular/core';

@Component({
  selector: 'artist',
  // templateUrl: './list-fav-artists.component.html',
  // styleUrls: ['./list-fav-artists.component.css'],
  template: `<h2>{{title}}</h2>
            <ul>
              <li *ngFor= "let artist of artists">
                  {{ artist }}
              </li>
            </ul>
`
})
export class ListFavArtistsComponent {
  title = "Favorite Artists";
    artists = ["artist1", "artist2","artist3"];
}
