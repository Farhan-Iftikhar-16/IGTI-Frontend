import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-log',
  templateUrl: './nav-log.component.html',
  styleUrls: ['./nav-log.component.scss']
})
export class NavLogComponent implements OnInit {

  items = [{}, {} , {}]

  constructor() { }

  ngOnInit(): void {
  }

}
