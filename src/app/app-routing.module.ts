import {RouterModule, Routes} from "@angular/router";
import {NavLogComponent} from "./nav-log/nav-log.component";
import {NgModule} from "@angular/core";
import {NavNotesAndObservationComponent} from "./nav-notes-and-observation/nav-notes-and-observation.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'nav-log',
    pathMatch: 'full'
  },
  {
    path: 'nav-log',
    component: NavLogComponent
  },
  {
    path: 'nav-notes-and-observation',
    component: NavNotesAndObservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
