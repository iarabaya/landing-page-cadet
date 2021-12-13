import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../../material.module';



@NgModule({
  declarations: [
    HistoryComponent,
    HomeComponent,
    TripListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class PagesModule { }
