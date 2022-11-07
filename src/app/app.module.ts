import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFavArtistsComponent } from './list-fav-artists/list-fav-artists.component';
import { TitleComponent } from './title/title.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { EventListComponent } from './event-list/event-list.component';
import { ArtistsService } from './artists.service'

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListFavArtistsComponent,
    TitleComponent,
    UserMenuComponent,
    EventListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ArtistsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
