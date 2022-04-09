import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsDataService {

  constructor() { }

  getDepartments(){
    return [
      {
        id : 1,
        name : "Oddelenie č.1"
      },
      {
        id : 2,
        name : "Oddelenie č.2"
      }
    ]
  }
  getPatients(){
    return [
      {
        id : 1,
        name : 'Barbara Hicks',
        departmentID : 1
      },
      {
        id : 2,
        name : 'Shirley Randle',
        departmentID : 1
      },
      {
        id : 3,
        name : 'Patricia Taylor',
        departmentID : 2
      },
      {
        id : 4,
        name : 'Howard Zielinski',
        departmentID : 1
      },
      {
        id : 5,
        name : 'Luis Hernandez',
        departmentID : 2
      },
    ]
  }
}
