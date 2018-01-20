import { Component, OnInit } from '@angular/core';
import {EventsService} from "../events.service";
import {Statistics} from "../statistics";
import * as moment from 'moment';

@Component({
  selector: 'app-event-main',
  templateUrl: './event-main.component.html',
  styleUrls: ['./event-main.component.css']
})
export class EventMainComponent implements OnInit {

  statistics: Statistics;

  constructor(
    private eventsService: EventsService
  ) { }

  async ngOnInit() {
    const tmpSatistics: Statistics = await this.eventsService.getStatistics();
    const firstWithFormat = moment(tmpSatistics.first).format('DD-MM-YYYY');
    const lastWithFormat = moment(tmpSatistics.last).format('DD-MM-YYYY');

    this.statistics = new Statistics(firstWithFormat, lastWithFormat, tmpSatistics.count);
  }

}
