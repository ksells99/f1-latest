import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  // NEXT RACE
  nextRace: any = {};
  nextRaceTime: string = '';
  nextRaceUTCtime: string = '';

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

  //
  userTheme: string = null;

  ngOnInit() {
    // Get user's saved theme from local storage (determines theme for Twitter widget)
    this.userTheme = localStorage.getItem('theme');

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

      // Get UTC race start time - remove excess chars from end of string.
      this.nextRaceUTCtime = res.MRData.RaceTable.Races[0].time.slice(0, -4);

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
  }

  ngAfterViewInit() {
    // Twitter feed - ensures widget reloads when user navigates back to the home component
    if ((<any>window).twttr) {
      (<any>window).twttr.widgets.load();
    }
  }
}
