import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


/* {
  "artists": [
      {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/2CIMQHirSU0MQqyYHq0eOx"
          },
          "followers": {
              "href": null,
              "total": 2750781
          },
          "genres": [
              "canadian electronic",
              "edm",
              "electro house",
              "pop dance",
              "progressive house"
          ],
          "href": "https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx",
          "id": "2CIMQHirSU0MQqyYHq0eOx",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab6761610000e5ebc5ceb05f152103b2b70d3b07",
                  "width": 640
              },
              {
                  "height": 320,
                  "url": "https://i.scdn.co/image/ab67616100005174c5ceb05f152103b2b70d3b07",
                  "width": 320
              },
              {
                  "height": 160,
                  "url": "https://i.scdn.co/image/ab6761610000f178c5ceb05f152103b2b70d3b07",
                  "width": 160
              }
          ],
          "name": "deadmau5",
          "popularity": 67,
          "type": "artist",
          "uri": "spotify:artist:2CIMQHirSU0MQqyYHq0eOx"
      },
      {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/57dN52uHvrHOxijzpIgu3E"
          },
          "followers": {
              "href": null,
              "total": 577645
          },
          "genres": [
              "alternative dance",
              "indietronica"
          ],
          "href": "https://api.spotify.com/v1/artists/57dN52uHvrHOxijzpIgu3E",
          "id": "57dN52uHvrHOxijzpIgu3E",
          "images": [
              {
                  "height": 693,
                  "url": "https://i.scdn.co/image/2f0c6c465a83cd196e651e3d4e7625ba799a6f60",
                  "width": 1000
              },
              {
                  "height": 444,
                  "url": "https://i.scdn.co/image/4e3e13c8b993bde9898e49509fb9ae121636e05f",
                  "width": 640
              },
              {
                  "height": 139,
                  "url": "https://i.scdn.co/image/dc68dd24b45b74ecce9d4ed486423673d683ced3",
                  "width": 200
              },
              {
                  "height": 44,
                  "url": "https://i.scdn.co/image/4e55ca05d4f336a2fa0e3062a7ec9778a201e8bc",
                  "width": 63
              }
          ],
          "name": "Ratatat",
          "popularity": 66,
          "type": "artist",
          "uri": "spotify:artist:57dN52uHvrHOxijzpIgu3E"
      },
      {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6"
          },
          "followers": {
              "href": null,
              "total": 22190847
          },
          "genres": [
              "dance pop",
              "edm",
              "pop",
              "pop dance",
              "pop rap"
          ],
          "href": "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6",
          "id": "1vCWHaC5f2uS3yhpwWbIA6",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab6761610000e5eb09bf4814c6585e1f69dfeef7",
                  "width": 640
              },
              {
                  "height": 320,
                  "url": "https://i.scdn.co/image/ab6761610000517409bf4814c6585e1f69dfeef7",
                  "width": 320
              },
              {
                  "height": 160,
                  "url": "https://i.scdn.co/image/ab6761610000f17809bf4814c6585e1f69dfeef7",
                  "width": 160
              }
          ],
          "name": "Avicii",
          "popularity": 79,
          "type": "artist",
          "uri": "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6"
      }
  ]
} */

//format of fav artists json
export interface Artist {
  id: string;
  name: string;
  type: string;
}

export interface SpotifyResponse {
  artists: Artist[]
}

@Injectable({
  providedIn: 'root'
})

export class ArtistsService {

  public artist: Artist | undefined;

  //Method to get followed artists from spotify API
  // private clientId: string = '477442391be640008a4d77335abd8f47';
  urlTest = 'https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6';
  //urlTest = 'https://api.spotify.com/v1/me/following?type=artist&limit=50'

  constructor(private http: HttpClient) { }
  public getfavArtists(): Observable<SpotifyResponse> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer BQCMAB0GzH4CnL2gyUsucOiK69vLyvKIaTxLPPI3ZrVttxGrafsk2cYqpQgW7UjbmijxtjxPC5L3eaGgG3zyxc_zD4MTRm6oxbRhW1CXenCnfblpO_DJZRTXhOlOZ94Tsu875c6lZJ31a2OPdV26Yuso6fswXIQjcwBLFu8CkjR6mCiUG9zKsWiilW-JlvRTvpnQug-JYPg8xwE'
    });
    console.log(headers);

    return this.http.get<SpotifyResponse>(this.urlTest, { headers: headers });
  }

  // //converting artist name to a JSON string
  // setArtist(key: string, value: Artist): void {
  //   localStorage.setItem(key, JSON.stringify(value));
  // }
  // //and storeing it to local storage
  // getArtist(key: string): Artist {
  //   return JSON.parse(localStorage.getItem(key)) as Artist;
  // }

}
