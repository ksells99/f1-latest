import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getNextRace(): Observable<any> {
    return this.http.get('https://ergast.com/api/f1/current/next.json');
  }

  getLastRace(): Observable<any> {
    return this.http.get('https://ergast.com/api/f1/current/last/results.json');
  }

  getDriverStandings(): Observable<any> {
    return this.http.get(
      'https://ergast.com/api/f1/current/driverStandings.json'
    );
  }

  getConstructorStandings(): Observable<any> {
    return this.http.get(
      'https://ergast.com/api/f1/current/constructorStandings.json'
    );
  }

  getCalendar(): Observable<any> {
    // return this.http.get('https://ergast.com/api/f1/current.json');
    return this.http.get('https://ergast.com/api/f1/2021.json');
  }
}
