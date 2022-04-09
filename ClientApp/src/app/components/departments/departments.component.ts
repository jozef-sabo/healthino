import { CurrentDepartmentService } from './../../services/current-department.service';
import { DepartmentsDataService } from './../../services/departments-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.sass']
})
export class DepartmentsComponent implements OnInit {

  departments : any
  department! : number

  constructor(private current_department_service : CurrentDepartmentService,
    private _departmentsDataService : DepartmentsDataService,
    private router : Router) { }

  ngOnInit(): void {
    this.current_department_service.current_department.subscribe(department => this.department = department)
    this.departments = this._departmentsDataService.getDepartments()
  }

  chooseDepartment(departmentAvailable:any){
    this.router.navigate(['patients'])
    let departmentID = departmentAvailable.id
    this.current_department_service.zmenitOddelenie(departmentID)
  }
}
