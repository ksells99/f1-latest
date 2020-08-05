import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DriverStandingsComponent } from './components/driver-standings/driver-standings.component';
import { ConstructorStandingsComponent } from './components/constructor-standings/constructor-standings.component';
import { LastRaceComponent } from './components/last-race/last-race.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'driver-standings', component: DriverStandingsComponent },
  { path: 'constructor-standings', component: ConstructorStandingsComponent },
  { path: 'last-race', component: LastRaceComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
