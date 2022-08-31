import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-notes-and-observation',
  templateUrl: './nav-notes-and-observation.component.html',
  styleUrls: ['./nav-notes-and-observation.component.scss']
})
export class NavNotesAndObservationComponent implements OnInit {

  comms = [{}, {}, {}, {}, {}];
  nav = [{}, {}, {}, {}, {}];

  constructor() { }

  ngOnInit(): void {
  }

}
