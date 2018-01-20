import { Component, OnInit } from '@angular/core';
import {ImportantEvent} from "../important-event";
import {EventsService} from "../events.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  event: ImportantEvent = new ImportantEvent()

  constructor(
    private eventService: EventsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit(form) {
    if(form.invalid) {
      return;
    }

    this.eventService.addEvent(this.event);
    this.router.navigate(['/events']);
  }

}
