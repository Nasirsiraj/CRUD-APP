import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../../service/teacher/teacher.service';
import {Teacher} from '../../model/teacher.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-teacher',
  templateUrl: './all-teacher.component.html',
  styleUrls: ['./all-teacher.component.scss']
})
export class AllTeacherComponent implements OnInit {

  constructor(
    private teacherService: TeacherService,
    private router: Router
  ) { }
  public teachers: Teacher[] = [];
  public tableColumns = ['id', 'name', 'subject', 'department', 'shift', 'email', 'action'];
  updateTeachers(): void{
    this.teacherService.getAllTeacher().subscribe(
      (teachers => this.teachers = teachers),
      (error => console.log((error as Error).message))
    );
  }
  goToEditPage(id$: number): void{
    this.router.navigate(['/dashboard/update-teacher', id$]);
  }
  deleteTeacher(id$: number): void{
    this.teacherService.deleteTeacherById(id$).subscribe(
      (res => console.log(res)),
      (error => console.log((error as Error).message))
    );
  }
  ngOnInit(): void {
    this.updateTeachers();
  }
}
