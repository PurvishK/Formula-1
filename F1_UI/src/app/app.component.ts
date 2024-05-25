import { Component, OnInit } from '@angular/core';
import { EndpointsService } from './services/endpoints.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'f1-ui';

  drivers: any;

  constructor() {}

  ngOnInit() {}
}
