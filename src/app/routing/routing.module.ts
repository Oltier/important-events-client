import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EventMainComponent} from "../event-main/event-main.component";
import {EventAboutComponent} from "../event-about/event-about.component";
import {EventListComponent} from "../event-list/event-list.component";
import {EventEditComponent} from "../event-edit/event-edit.component";

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
  },
  {
    path: 'events/add',
    component: EventEditComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
