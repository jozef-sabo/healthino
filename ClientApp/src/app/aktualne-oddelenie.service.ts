import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AktualneOddelenieService {

  private aktualneOddelenie = new BehaviorSubject<number>(0);
  aktualne_oddelenie = this.aktualneOddelenie.asObservable();

  constructor() { }
  
  zmenitOddelenie(oddelenie:number){
    this.aktualneOddelenie.next(oddelenie)
  }
}
