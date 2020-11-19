import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../service/student/student.service';
import {Student} from '../../model/student.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.scss']
})
export class AllStudentComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }
  public students: Student[] = [];
  public tableColumns = ['id', 'name', 'roll', 'reg', 'email', 'department', 'semester', 'action'];

  updateStudents(): void{
    this.studentService.getAllStudent().subscribe(
      (students => this.students = students),
      (error => console.log((error as Error).message))
    );
  }
  goToEditPage(id$: number): void{
    this.router.navigate(['/dashboard/update-student', id$]);
  }
  deleteStudent(id$: number): void{
    this.studentService.deleteStudentById(id$).subscribe(
      (res => {
        console.log(res);
        this.updateStudents();
      }),
      (error => console.log((error as Error).message))
    );
  }
  ngOnInit(): void {
    this.updateStudents();
  }
}
