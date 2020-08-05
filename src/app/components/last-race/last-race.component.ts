import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-last-race',
  templateUrl: './last-race.component.html',
  styleUrls: ['./last-race.component.css'],
})
export class LastRaceComponent implements OnInit {
  lastRaceResults: any = {};
  lastRaceResultsLoading: boolean = true;

  // Inject service as dependency
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Get last race data from service
    this.dataService.getLastRace().subscribe((res) => {
      this.lastRaceResults = res.MRData.RaceTable;

      this.lastRaceResultsLoading = false;
    });
  }
}
