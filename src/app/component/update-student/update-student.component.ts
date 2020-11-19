import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../service/student/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  public studentForm: FormGroup = this.formBuilder.group({
    id: [null],
    name: ['', [Validators.required]],
    roll: [null, [Validators.required]],
    reg: [null, [Validators.required]],
    email: ['', [Validators.required]],
    department: ['', [Validators.required]],
    semester: ['', [Validators.required]]
  });
  getExistingStudent(): void{
    this.studentService.getStudentById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(
      (response => {
        this.studentForm.setValue(response);
      }),
      (error => console.log((error as Error).message))
    );
  }
  saveStudent(): void{
    this.studentService.postOneStudent(this.studentForm.value).subscribe(
      (response => {
        this.router.navigate(['/dashboard/all-student']);
      }),
      (error => console.log((error as Error).message))
    );
  }
  get id(){
    return this.studentForm.get('id');
  }
  get name(){
    return this.studentForm.get('name');
  }
  get roll(){
    return this.studentForm.get('roll');
  }
  get reg(){
    return this.studentForm.get('reg');
  }
  get email(){
    return this.studentForm.get('email');
  }
  get department(){
    return this.studentForm.get('department');
  }
  get semester(){
    return this.studentForm.get('semester');
  }
  ngOnInit(): void {
    this.getExistingStudent();
  }
}
