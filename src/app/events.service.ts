import { Injectable } from '@angular/core';
import { ImportantEvent } from "./important-event";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Statistics} from "./statistics";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EventsService {

  private apiUrl = 'http://localhost:3000/api/Events';

  constructor(
    private http: HttpClient
  ) { }

  getEvents(): Promise<Array<ImportantEvent>> {
    return this.http.get<Array<ImportantEvent>>(`${this.apiUrl}`, httpOptions).toPromise();
  }

  getEvent(id: string): Promise<ImportantEvent> {
    return this.http.get<ImportantEvent>(`${this.apiUrl}/${id}`, httpOptions).toPromise();
  }

  addEvent(event: ImportantEvent): Promise<Object> {
    return this.http.post(`${this.apiUrl}`, event, httpOptions).toPromise();
  }

  updateEvent(id: string, event: ImportantEvent): Promise<Object> {
    return this.http.patch(`${this.apiUrl}/${id}`, event, httpOptions).toPromise();
  }

  getStatistics(): Promise<Statistics> {
    return this.http.get<Statistics>(`${this.apiUrl}/statistics`, httpOptions).toPromise();
  }

}
