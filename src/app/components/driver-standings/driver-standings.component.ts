import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-driver-standings',
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.css'],
})
export class DriverStandingsComponent implements OnInit {
  driverStandings: any = {};
  driverStandingsLoading: boolean = true;

  // Inject service as dependency
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Get driver standings from service injected above

    this.dataService.getDriverStandings().subscribe((res) => {
      this.driverStandings = res.MRData.StandingsTable.StandingsLists;
      this.driverStandingsLoading = false;
    });
  }
}
