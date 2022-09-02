import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

title = 'Events';

events = ["event1", "event2"];


  constructor() { }

  ngOnInit(): void {
  }

}
