import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  city: any[] = ["Berlin","London","New York","Paris"] ;

  searchEvent(){
    console.log("click!");
  }
  
  constructor() { }


  ngOnInit(): void {
  }

}