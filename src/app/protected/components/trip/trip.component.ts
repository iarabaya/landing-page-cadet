import { Component, Input } from '@angular/core';
import { TravelResponse } from '../../interfaces/travel.interface';
import { TravelService } from '../../services/travel.service';
import Swal from 'sweetalert2';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent {

  userId = JSON.parse(localStorage.getItem('userId')|| '0');
  
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
  
  constructor(private travelService: TravelService){
  //  console.log(this.item)
  }

  acceptTravel(){ 
    this.travelService.postTravel(this.item.id, 2, this.userId, this.userId, false, 'viaje tomado' ).subscribe( res => {
      if(res.id){
        Swal.fire('Viaje Aceptado', `${res.creationDate}`, 'success');
        this.travelService.getAvailableTravels(2);
      }else{
        Swal.fire('Error', res , 'error');
      }
    })
  }

  onTravel(){
    this.travelService.postTravel(this.item.id, 3, this.userId, this.userId, false, 'en viaje' ).subscribe( res => {
      if(res.id){
        Swal.fire('Viaje en Curso', `${res.creationDate}`, 'success');
        this.travelService.getAvailableTravels(2);
      }else{
        Swal.fire('Error', res , 'error');
      }
    })
  }

  cancelTravel(){
    this.travelService.postTravel(this.item.id, 10, this.userId, this.userId, true, 'renunciado' ).subscribe( res => {
      if(res.id){
        Swal.fire('Viaje Renunciado correctamente', `${res.creationDate}`, 'success');
        this.travelService.getAcceptedTravels(2);
      }else{
        Swal.fire('Error', res , 'error');
      }
    })
  }

}
