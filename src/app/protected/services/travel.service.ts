import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, of } from 'rxjs';
import { TravelResponse } from '../interfaces/travel.interface';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private url = `api/Travel`;
  private _results: TravelResponse[] = [];
  private email: string = '';

  get results(){
    return [...this._results];
  }

  constructor( private http: HttpClient ) { 
    if(localStorage.getItem('email')){
      this.email = localStorage.getItem('email')!;
    }
  }

  filterByCadet(arr: TravelResponse[]){
    return arr.filter( el => el.travelEquipmentDTOs[el.travelEquipmentDTOs.length - 1].cadete?.email === this.email)
  }
  
  getAvailableTravels( roleId: number){
    let status1 = this.http.get<TravelResponse[]>(this.url + `/2/1`);
    let status5 = this.http.get<TravelResponse[]>(this.url + `/2/5`);

    forkJoin([status1, status5]).subscribe( res => {
      this._results = [...res[0], ...res[1]]
      console.log(this._results)
    })
  }

  getAcceptedTravels( roleId: number){
    const status2 = this.http.get<TravelResponse[]>(this.url + `/${roleId}/2`);
    const status3 = this.http.get<TravelResponse[]>(this.url + `/${roleId}/3`);
    const status6 = this.http.get<TravelResponse[]>(this.url + `/${roleId}/6`);
    const status7 = this.http.get<TravelResponse[]>(this.url + `/${roleId}/7`);
    forkJoin([status2, status3, status6, status7]).subscribe( res => {
      const newResults: TravelResponse[] = [...res[0], ...res[1], ...res[2],...res[3]]
       this._results = this.filterByCadet(newResults);
      // console.log(newResults)
      console.log(this._results);
      
    })
  }

  getOnGoingTravels(roleId: number){
    const status3 = this.http.get<TravelResponse[]>(this.url + `/${roleId}/3`);
    const status7 = this.http.get<TravelResponse[]>(this.url + `/${roleId}/7`);

    forkJoin([status3, status7]).subscribe( res => {
      const newResults: TravelResponse[] = [...res[0], ...res[1]]
      this._results = this.filterByCadet(newResults);
      // console.log(newResults)
      console.log(this._results);
      
    })
  }

  postTravel(travelId: number, statusTravel: number, userOperation: number, cadeteId: number, isReasigned: boolean, observations: string){
    const data = {
      travelId: travelId,
      statusTravel: statusTravel,
      userOperation: userOperation,
      cadeteId: cadeteId,
      isReasigned: isReasigned,
      observations: observations
    }

    //`?travelId=282&statusTravel=2&userOperation=21&cadeteId=21&isReasigned=false&observations=retiro`
    const postUrl = this.url + `?travelId=${travelId}&statusTravel=${statusTravel}&userOperation=${userOperation}&cadeteId=${cadeteId}&isReasigned=${isReasigned}&observations=${observations}`

    return this.http.post<TravelResponse>(postUrl, data).pipe(
      catchError( res => of(res.error))
    );
  }

}
