import { CurrentDepartmentService } from '../../current-department.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.sass']
})
export class DepartmentsComponent implements OnInit {

  departments = ["Oddelenie č.1","Oddelenie č.2"]
  department! : number;

  constructor(private current_department_service : CurrentDepartmentService, private router : Router) { }

  ngOnInit(): void {
    this.current_department_service.current_department.subscribe(department => this.department = department)
  }

  chooseDepartment(departmentOption:string){
    this.router.navigate(['patients'])
    let departmentID = this.departments.indexOf(departmentOption)
    this.current_department_service.zmenitOddelenie(departmentID)
  }
}
