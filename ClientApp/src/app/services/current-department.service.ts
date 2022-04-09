import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentDepartmentService {

  private currentDepartment = new BehaviorSubject<number>(0);
  current_department = this.currentDepartment.asObservable();

  constructor() { }
  
  zmenitOddelenie(department:any){
    this.currentDepartment.next(department)
  }
}
