import { Component, OnInit } from '@angular/core';
import {Author} from "../author";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-event-about',
  templateUrl: './event-about.component.html',
  styleUrls: ['./event-about.component.css']
})
export class EventAboutComponent implements OnInit {

  author: Author

  constructor() { }

  ngOnInit() {
    this.author = new Author(environment.author.name, environment.author.neptun, environment.author.email);
  }

}
