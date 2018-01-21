import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from "./routing/routing.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";

import {EventsService} from "./events.service";

import { AppComponent } from './app.component';
import { EventMainComponent } from './event-main/event-main.component';
import { EventAboutComponent } from './event-about/event-about.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    EventMainComponent,
    EventAboutComponent,
    EventListComponent,
    EventEditComponent,
    DatepickerPopupComponent,
  ],
  imports: [
    NgbDatepickerModule,
    BrowserModule,
    NgbModule.forRoot(),
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
