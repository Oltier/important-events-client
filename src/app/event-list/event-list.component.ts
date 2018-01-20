import {Component, OnInit} from '@angular/core';
import {ImportantEvent} from "../important-event";
import {EventsService} from "../events.service";
import moment = require("moment");

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: ImportantEvent[];

  constructor(private eventService: EventsService) {
  }

  async ngOnInit() {
    const tmpEvents = await this.eventService.getEvents();

    this.events = tmpEvents
      .sort((left, right) => {
        return moment.utc(moment(left.date).valueOf()).diff(moment.utc(moment(right.date).valueOf())) * -1;
      })
      .map(event => {
        event.date = moment(event.date).format('DD-MM-YYYY');
        return event;
      });
  }

}
