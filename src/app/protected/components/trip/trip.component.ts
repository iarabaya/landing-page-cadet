import { Component, Input } from '@angular/core';
import { TravelResponse } from '../../interfaces/travel.interface';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent {
  @Input() 
  item!: TravelResponse;

  envioMap = {
    '1' : 'retiro pendiente',
    '2' : 'retiro asignado',
    '3' : 'retirado',
    '4' : 'reparacion pendiente',
    '5' : 'reparado',
    '6' : 'entrega asignada',
    '7' : 'entrega pendiente',
    '8' : 'entregado',
    '9' : 'recibido',
    '10' : 'renunciado',
  }

}
