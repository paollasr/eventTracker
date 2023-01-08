import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
//import { ArtistsService } from 'src/app/artists.service';
import { map, tap } from 'rxjs/operators';
import { Observable , interval, Subscription } from 'rxjs';
import { Artist, ArtistsService, SpotifyResponse } from 'src/app/artists.service';

@Component({
  selector: 'app-artist',
  templateUrl: './list-fav-artists.component.html',
  styleUrls: ['./list-fav-artists.component.css'],
})


export class ListFavArtistsComponent{
  public artist!: Artist;
  title = "Favorite Artists";
  apiFavArtists: Observable<Artist[]>;

  constructor(public artistsService: ArtistsService) {

//variable which contains artist object using Artists.Service
    this.apiFavArtists = this.artistsService.getfavArtists().pipe(
      map((spotifyResponse:SpotifyResponse) => spotifyResponse.artists)
      // tap(listOfArtists => this.artist = listOfArtists[0]),
      // map(listOfArtists => listOfArtists[0]),
      // map(artist => artist.name),
      // map(name => name.toUpperCase()),
      // tap(name => console.log(name))
    );


    // this.apiFavArtists = this.artistsService
    //   .getfavArtists()
    //   .map(spotifyResponse => spotifyResponse.artists)
    // ;

    this.apiFavArtists.subscribe( artist => {
      console.log(this.apiFavArtists);
    })

// //store object in browser localStorage
// storeArtistObject():void {
//   this.artistsService.setArtist('artistObject', artist)
// }
//
// //retrieve object from browser localStorage
//  retrieveArtistObject(): object {
//   return this.artistsService.getArtist('artistObject');
// }

const names = ["Paola de Sousa Rodrigues", "Stephan  ahahha ahhaha Peter Flowers logic Rauh"];
const shorterName = names.map(longName => this.shrotName(longName));
console.log(shorterName);

console.log(this.shrotName);
this.demo();
  }


  shrotName(names: string) : string{
    const partsName = names.split(" ");
    const firstName = partsName[0];
    const lastName = partsName[partsName.length - 1] ;
    console.log(firstName + " " +  lastName);
    return firstName + " " + lastName;
  }

  private demo(): void {
    const colors = ["green", "yellow", "red"];
    colors.forEach(color => console.log(color));
    const colorLength = colors.map(colorLowerCase =>colorLowerCase.toUpperCase())
    .reduce((previous, current) => previous + current)
                              // .reverse()
                              // .filter(color => color.includes("R") )
                              // .map(color => color.length);
                                  //.map((id: number) => loadObjectFromDatabase(id));
    // colorLength.forEach(colorUpperCase => console.log(colorUpperCase));
    console.log(colorLength);
  }


}
