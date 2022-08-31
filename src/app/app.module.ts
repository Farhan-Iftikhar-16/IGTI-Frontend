import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavLogComponent } from './nav-log/nav-log.component';
import { HeaderComponent } from './header/header.component';
import {InputTextModule} from "primeng/inputtext";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {TableModule} from "primeng/table";
import { NavNotesAndObservationComponent } from './nav-notes-and-observation/nav-notes-and-observation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLogComponent,
    HeaderComponent,
    NavNotesAndObservationComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    RouterModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
