import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountdownModule } from 'ng2-date-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { DriverStandingsComponent } from './components/driver-standings/driver-standings.component';
import { ConstructorStandingsComponent } from './components/constructor-standings/constructor-standings.component';
import { LastRaceComponent } from './components/last-race/last-race.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, DriverStandingsComponent, ConstructorStandingsComponent, LastRaceComponent, CalendarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CountdownModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
