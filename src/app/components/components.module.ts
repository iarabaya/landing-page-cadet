import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TripComponent } from './trip/trip.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TripComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
