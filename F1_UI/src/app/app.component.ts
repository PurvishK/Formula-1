import {Component, OnInit} from '@angular/core';
import {io} from 'socket.io-client';
import {EndpointsService} from "../services/endpoints.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'f1-ui';

  constructor(private endPoints: EndpointsService) {
  }

  ngOnInit() {
    const socket = io();
    this.endPoints.getAllDriver().subscribe((res)=>{

    });
  }
}
