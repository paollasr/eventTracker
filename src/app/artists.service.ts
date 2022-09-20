import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


//format of fav artists json
export interface Artist{
  userId: number;
  id: number;
  title: string;
  body: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

// let headers = new HttpHeaders();
// headers .set('Accept', 'application/json');
// headers .set('Content-Type', 'application/json');
// headers .set('Authorization', 'Bearer BQAPcnDJSjPPdDfrNKPVn2zZLEtjqjZseGKDip7vjvhdHcTrhYfP0Gk6RjZHawlBMEMivubo38j2gv4FF7zuXx2sRbdR4fwjGuT2zYhhsRlXB5z-bskFNcbY7idbeMvv-5WWtgWmD2sMeyE34md4-k6LFisL3PhRxjQTuIjdIUz_AxIYcEFHfMVWLj9u2YM_xVlG19uEXwESWb8');
// console.log(headers);

  urlTest = 'https://jsonplaceholder.typicode.com/posts/1';
 // urlTest = 'https://api.spotify.com/v1/me/following?type=artist&after=0I2XqVXqHScXjHhk6AYYRe&limit=10';

  constructor(private http: HttpClient) { }

  getfavArtists(){
    return this.http.get<Artist[]>(this.urlTest);
  }
}
