import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee/employee.service';
import {Employee} from '../../model/employee.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.scss']
})
export class AllEmployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }
  public employees: Employee[] = [];
  public tableColumns = ['id', 'name', 'department', 'shift', 'salary', 'action'];
  goToEditPage(id$: number): void{
    this.router.navigate(['/dashboard/update-employee', id$]);
  }
  deleteEmployee(id$: number): void{
    this.employeeService.deleteEmployeeById(id$).subscribe(
      (res => {
        console.log(res);
        this.updateEmployees();
      }),
      (error => console.log((error as Error).message))
    );
  }
  private updateEmployees(): void{
    this.employeeService.getAllEmployee().subscribe(
      (employees => this.employees = employees),
      (error => console.log((error as Error).message))
    );
  }

  ngOnInit(): void {
    this.updateEmployees();
  }

}
