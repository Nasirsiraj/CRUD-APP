import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../../service/teacher/teacher.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.scss']
})
export class UpdateTeacherComponent implements OnInit {

  constructor(
    private teacherService: TeacherService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  public teacherForm: FormGroup = this.formBuilder.group({
    id: [null],
    name: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    department: ['', [Validators.required]],
    shift: ['', [Validators.required]],
    email: ['', [Validators.required]]
  });
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
  getExistingTeacher(): void{
    this.teacherService.getTeacherById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(
      (response => {
        this.teacherForm.setValue(response);
      }),
      (error => console.log((error as Error).message))
    );
  }
  saveTeacher(): void {
    this.teacherService.postOneTeacher(this.teacherForm.value).subscribe(
      (response => {
        this.router.navigate(['/dashboard/all-teacher']);
      }),
      (error => console.log((error as Error).message))
    );
  }
  ngOnInit(): void {
    this.getExistingTeacher();
  }

}
