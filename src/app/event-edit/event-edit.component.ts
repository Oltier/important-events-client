import { Component, OnInit } from '@angular/core';
import {ImportantEvent} from "../important-event";
import {EventsService} from "../events.service";
import {ActivatedRoute, Router} from "@angular/router";
import moment = require("moment");

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  event: ImportantEvent;
  error: string;
  datePickerModel: Object;
  editing: boolean;
  id: string;

  constructor(
    private eventService: EventsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('objectId');
    if(this.id) {
      this.editing = true;
      const tmpEvent = await this.eventService.getEvent(this.id);
      const momentDate = moment(tmpEvent.date);
      this.event = new ImportantEvent(tmpEvent.title, momentDate.toISOString(), tmpEvent.location, tmpEvent.note);
      this.datePickerModel = {
        year: momentDate.year(),
        month: momentDate.month(),
        day: momentDate.date()
      };
    } else {
      this.editing = false;
      this.event = new ImportantEvent('','','','');
    }
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


    if(this.editing) {
      this.event = new ImportantEvent(title, date.toISOString(), location, note);
      this.eventService.updateEvent(this.id, this.event)
        .then(() => {
          this.router.navigate(['/events']);
        })
        .catch((err) => {
          this.error = `There was an error: ${err.status} ${err.statusText}.`;
        });
    } else {
      this.event = new ImportantEvent(title, date.toISOString(), location, note);
      this.eventService.addEvent(this.event)
        .then(() => {
          this.router.navigate(['/events']);
        })
        .catch((err) => {
          this.error = `There was an error: ${err.status} ${err.statusText}.`;
        });
    }
  }

}
