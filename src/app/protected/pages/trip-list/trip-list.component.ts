import { Component } from '@angular/core';
import { I18nSelectPipe } from '@angular/common';

import { TravelService } from '../../services/travel.service';
@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent {
  selected = 'disponibles';

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

  get results(){
    return this.travelService.results
  }

  constructor(private travelService: TravelService){ }

  getTravels(selected: string){
    let statusString: string;
    
    if(localStorage.getItem('roleId')){
      let role = JSON.parse(localStorage.getItem('roleId') || '2');
      statusString = selected

      switch (statusString) {
        case 'disponibles':
          // [1, 5]
          this.travelService.getAvailableTravels(role);
          break;
        case 'aceptados':
          // [2,3,6,7]
          this.travelService.getAcceptedTravels(role)
          break;
        case 'en curso':
          //[3, 7]
          this.travelService.getOnGoingTravels(role)
          break;
        }

    }

  }

}
