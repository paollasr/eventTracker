import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

 urlTest = 'https://jsonplaceholder.typicode.com/posts/1';
  //private artists: any[];


  constructor(private http: HttpClient) { }

  get favArtists(){
    return this.http.get<ArtistsService>(this.urlTest);
  }
}
