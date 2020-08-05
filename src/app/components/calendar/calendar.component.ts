import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  raceCalendar: any = {};
  raceCalendarLoading: boolean = true;

  // Inject service as dependency
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Get race calendar info from service
    this.dataService.getCalendar().subscribe((res) => {
      this.raceCalendar = res.MRData.RaceTable;
      // Set loading to false
      this.raceCalendarLoading = false;
    });
  }
}
