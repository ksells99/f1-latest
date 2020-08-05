import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // NEXT RACE
  nextRace: any = {};
  nextRaceTime: string = '';

  nextRaceTimeDate: string;
  nextRaceLoading: boolean = true;

  // Text format for countdown
  text: any = {
    Year: 'Y',
    Month: 'M',
    Weeks: 'W',
    Days: 'Days',
    Hours: 'Hours',
    Minutes: 'Mins',
    Seconds: 'Secs',
    MilliSeconds: 'ms',
  };

  // DRIVERS STANDINGS
  driverStandings: any = {};
  driverStandingsLoading: boolean = true;

  // CONSTRUCTOR STANDINGS
  constructorStandings: any = {};
  constructorStandingsLoading: boolean = true;

  // LAST RACE
  lastRaceResults: any = {};
  lastRaceResultsLoading: boolean = true;

  // Inject dataservice as dependency
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // NEXT RACE INFO
    this.dataService.getNextRace().subscribe((res) => {
      // Get next race info from dataService
      this.nextRace = res.MRData.RaceTable.Races;

      // Create string based on next race date and time - used in countdown timer - 'T' between date/time ensures compat. with Safari
      this.nextRaceTimeDate = this.nextRaceTime.concat(
        res.MRData.RaceTable.Races[0].date,
        'T',
        res.MRData.RaceTable.Races[0].time
      );

      // Set loading to false
      this.nextRaceLoading = false;
    });

    // DRIVERS STANDINGS
    this.dataService.getDriverStandings().subscribe((res) => {
      this.driverStandings = res.MRData.StandingsTable.StandingsLists;
      this.driverStandingsLoading = false;
    });

    // CONSTRUCTORS STANDINGS
    this.dataService.getConstructorStandings().subscribe((res) => {
      this.constructorStandings = res.MRData.StandingsTable.StandingsLists;
      this.constructorStandingsLoading = false;
    });

    // LAST RACE
    this.dataService.getLastRace().subscribe((res) => {
      this.lastRaceResults = res.MRData.RaceTable;

      this.lastRaceResultsLoading = false;
    });

    // Twitter feed - ensures widget reloads when user navigates back to the home component
    (<any>window).twttr.widgets.load();
  }
}
