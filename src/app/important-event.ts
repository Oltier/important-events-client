import * as moment from 'moment';
import {Moment} from "moment";

export class ImportantEvent {
  id?: string;
  title: string = '';
  date: string = '';
  location: string = '';
  note: string = '';

  constructor(
    title: string,
    date: string,
    location: string,
    note: string = ''
  ) {
    this.title = title;
    this.date = date;
    this.location = location;
    this.note = note;
  }
}
