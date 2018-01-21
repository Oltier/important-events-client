import { Component, OnInit } from '@angular/core';
import {ImportantEvent} from "../important-event";
import {EventsService} from "../events.service";
import {Router} from "@angular/router";
import moment = require("moment");

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  event: ImportantEvent;
  error: string;

  constructor(
    private eventService: EventsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.event = new ImportantEvent('','','','');
    this.error = ''
  }

  onSubmit(form) {
    console.log(form);
    if(form.invalid) {
      console.log('Invalid form');
      return;
    }

    const values = form.form.value;
    const title = values.title;
    const location = values.location;
    const date = moment(values.date);
    const note = values.note || '';

    this.event = new ImportantEvent(title, date.toISOString(), location, note);

    this.eventService.addEvent(this.event)
      .then((response) => {
        this.router.navigate(['/events']);
      })
      .catch((err) => {
        this.error = `There was an error: ${err.status} ${err.statusText}.`;
      });
  }

}
