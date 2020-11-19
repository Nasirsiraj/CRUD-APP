import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee/employee.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../model/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) { }
  public employee !: Employee;
  public employeeForm: FormGroup = this.formBuilder.group({
    id: [null],
    name: ['', [Validators.required]],
    department: ['', [Validators.required]],
    shift: ['', [Validators.required]],
    salary: [null, [Validators.required]]
  });
  saveEmployee(employee$: Employee): void{
    this.employeeService.postOneEmployee(employee$).subscribe(
      (emp => {
        console.log(emp);
        this.employeeForm.reset();
      }),
      (error => console.log((error as Error).message))
    );
  }
  onSubmit(): void{
    this.employee = this.employeeForm.value;
    this.saveEmployee(this.employee);
  }
  // getter and setter
  get id(){
    return this.employeeForm.get('id');
  }
  get name(){
    return this.employeeForm.get('name');
  }
  get department(){
    return this.employeeForm.get('department');
  }
  get shift(){
    return this.employeeForm.get('shift');
  }
  get salary(){
    return this.employeeForm.get('salary');
  }
  ngOnInit(): void {
  }

}
