import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-constructor-standings',
  templateUrl: './constructor-standings.component.html',
  styleUrls: ['./constructor-standings.component.css'],
})
export class ConstructorStandingsComponent implements OnInit {
  constructorStandings: any = {};
  constructorStandingsLoading: boolean = true;

  // Inject service as dependency
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Get constructor standings from service injected above

    this.dataService.getConstructorStandings().subscribe((res) => {
      this.constructorStandings = res.MRData.StandingsTable.StandingsLists;
      this.constructorStandingsLoading = false;
    });
  }
}
