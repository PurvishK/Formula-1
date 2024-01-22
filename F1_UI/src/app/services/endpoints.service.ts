import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8842';

  getAllDriver(year: string) {
    const mainUrl = this.url + `/getAllDrivers/${year}`;
    return this.http.get(mainUrl);
  }
}
