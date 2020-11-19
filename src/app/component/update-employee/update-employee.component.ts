import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../service/employee/employee.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  public employeeForm: FormGroup = this.formBuilder.group({
    id: [null],
    name: ['', [Validators.required]],
    department: ['', [Validators.required]],
    shift: ['', Validators.required],
    salary: [null, [Validators.required]]
  });
  getExistingEmployee(): void{
    this.employeeService.getEmployeeById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(
      (response => {
        this.employeeForm.setValue(response);
      }),
      (error => console.log((error as Error).message))
    );
  }
  saveEmployee(): void{
    this.employeeService.postOneEmployee(this.employeeForm.value).subscribe(
      (response => {
        this.router.navigate(['/dashboard/all-employee']);
      }),
      (error => console.log((error as Error).message))
    );
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
    this.getExistingEmployee();
  }

}
