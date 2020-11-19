import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../../service/teacher/teacher.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Teacher} from '../../model/teacher.model';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  constructor(
    private teacherService: TeacherService,
    private formBuilder: FormBuilder
  ) { }
  public teacher !: Teacher;
  public teacherForm: FormGroup = this.formBuilder.group({
    id: [null],
    name: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    department: ['', [Validators.required]],
    shift: ['', [Validators.required]],
    email: ['', [Validators.required]]
  });
  saveTeacher(teacher$: Teacher): void{
    this.teacherService.postOneTeacher(teacher$).subscribe(
      (teacher => {
        console.log(teacher);
        this.teacherForm.reset();
      }),
      (error => console.log((error as Error).message))
    );
  }
  onSubmit(): void {
    this.teacher = this.teacherForm.value;
    this.saveTeacher(this.teacher);
  }
  // getter and setter
  get id(){
    return this.teacherForm.get('id');
  }
  get name(){
    return this.teacherForm.get('name');
  }
  get subject(){
    return this.teacherForm.get('subject');
  }
  get department(){
    return this.teacherForm.get('department');
  }
  get shift(){
    return this.teacherForm.get('shift');
  }
  get email(){
    return this.teacherForm.get('email');
  }
  ngOnInit(): void {
  }
}
