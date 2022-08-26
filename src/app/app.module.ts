import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFavArtistsComponent } from './list-fav-artists/list-fav-artists.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFavArtistsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
