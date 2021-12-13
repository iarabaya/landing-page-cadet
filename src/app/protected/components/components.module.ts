import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { TripComponent } from './trip/trip.component';

import { AppRoutingModule } from '../../app-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ProtectedRoutingModule } from '../protected-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    TripComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProtectedRoutingModule
  ],
  exports:[
    HeaderComponent,
    TripComponent,
  ]
})
export class ComponentsModule { }
