import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    HistoryComponent,
    TripListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
