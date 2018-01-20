import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EventMainComponent} from "../event-main/event-main.component";
import {EventAboutComponent} from "../event-about/event-about.component";
import {EventListComponent} from "../event-list/event-list.component";

const routes: Routes = [
  {
    path: '',
    component: EventMainComponent
  },
  {
    path: 'about',
    component: EventAboutComponent
  },
  {
    path: 'events',
    component: EventListComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
