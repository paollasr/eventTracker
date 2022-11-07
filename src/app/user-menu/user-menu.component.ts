import { Component, OnInit, ElementRef, ViewChild, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UserInputService } from 'src/app/user-input.service';
import { ArtistsService } from 'src/app/artists.service';


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})

export class UserMenuComponent {

  selectedCity: string | undefined = undefined;
  private _selectedDate: string | undefined = undefined;

  get selectedDate(): string | undefined { return this._selectedDate }
  set selectedDate(date: string | undefined) { this._selectedDate = date;
  console.log("Setter" + this._selectedDate) }

  showText = false;
  constructor(public artistsService: ArtistsService){

  }
  sendDataOnChange(event: any) {
    console.log(event.target.value);
    console.log(this.selectedCity);
    //this.selectedDate = event.target.value;

  }

  searchEvent() {
    this.showText = true;
    console.log("click!");
    this.selectedCity = '';
    this.selectedDate = undefined;
  }

  //
  //
  //
  // ngOnInit(): void {
  // }

}
