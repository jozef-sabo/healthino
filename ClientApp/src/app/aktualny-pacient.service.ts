import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AktualnyPacientService {

  private aktualnyPacient = new BehaviorSubject<number>(0);
  aktualny_pacient = this.aktualnyPacient.asObservable();

  constructor() { }

  zmenitPacienta(pacient:number){
    this.aktualnyPacient.next(pacient)
  }

}
