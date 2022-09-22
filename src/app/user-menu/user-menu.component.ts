import { Component, OnInit, ElementRef, ViewChild, NgModule  } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UserInputService } from 'src/app/user-input.service';


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})

export class UserMenuComponent {

  selectedCity: string = '';
  selectedDate: string = '';
  showText = false;

  sendDataOnChange(event: any){
    console.log(event.target.value);
    console.log(this.selectedCity);
    this.selectedDate = event.target.value;

  }

  searchEvent(){
    this.showText = true;
    console.log("click!");
    this.selectedCity = '';
    //sthis.selectedDate = null;
  }

  //
  //
  //
  // ngOnInit(): void {
  // }

}
