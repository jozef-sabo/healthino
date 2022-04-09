import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentPatientService {

  private currentPatient = new BehaviorSubject<number>(0);
  current_patient = this.currentPatient.asObservable();

  constructor() { }

  changePatient(patient:any){
    this.currentPatient.next(patient)
  }

}
