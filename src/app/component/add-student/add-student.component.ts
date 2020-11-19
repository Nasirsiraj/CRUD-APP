import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../service/student/student.service';
import {Student} from '../../model/student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) { }
  public student !: Student;
  public studentForm: FormGroup = this.formBuilder.group({
    id: [null],
    name: ['', [Validators.required]],
    roll: [null, [Validators.required]],
    reg: [null, [Validators.required]],
    email: ['', [Validators.required]],
    department: ['', [Validators.required]],
    semester: ['', [Validators.required]]
  });
  onSubmit(): void{
    this.student = this.studentForm.value;
    this.saveStudent(this.student);
  }
  saveStudent(student$: Student): void{
    this.studentService.postOneStudent(student$).subscribe(
      (student => {
        console.log(student);
        this.studentForm.reset();
      }),
      (error => console.log((error as Error).message))
    );
  }
  // getter and setter
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
  }
}
