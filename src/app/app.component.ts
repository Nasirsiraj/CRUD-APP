import {Component, OnInit} from '@angular/core';
import {Book} from './model/book.model';
import {BookService} from './service/book/book.service';
import {EmployeeService} from './service/employee/employee.service';
import {LaptopService} from './service/laptop/laptop.service';
import {StudentService} from './service/student/student.service';
import {TeacherService} from './service/teacher/teacher.service';
import {Employee} from './model/employee.model';
import {Laptop} from './model/laptop.model';
import {Student} from './model/student.model';
import {Teacher} from './model/teacher.model';
import {DocumentImportVisitor} from '@angular/core/schematics/migrations/move-document/document_import_visitor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private bookService: BookService,
    private employeeService: EmployeeService,
    private laptopService: LaptopService,
    private studentService: StudentService,
    private teacherService: TeacherService
  ) {
  }
  title = 'CRUD-APP';
  // book
  // get all book
  public getAllBook(): void{
    this.bookService.getAllBook().subscribe(
      (books => console.log(books)),
      (error => console.log(error))
    );
  }
  // get book by id
  public getBookById(id$: number): void{
    this.bookService.getBookById(id$).subscribe(
      (book => console.log(book)),
      (error => console.log(error))
    );
  }
  // post all book
  public postAllBook(books$: Book[]): void{
    this.bookService.postAllBook(books$).subscribe(
      (books => console.log(books)),
      (error => console.log(error))
    );
  }
  // post one book
  public postOneBook(book$: Book): void{
    this.bookService.postOneBook(book$).subscribe(
      (book => console.log(book)),
      (error => console.log(error))
    );
  }
  // delete book by id
  public deleteBookById(id$: number): void{
    this.bookService.deleteBookById(id$).subscribe(
      (res => console.log(res)),
      (error => console.log(error))
    );
  }
  // delete book by obj
  public deleteBook(book$: Book): void{
    this.bookService.deleteBook(book$).subscribe(
      (res => console.log(res)),
      (error => console.log(error))
    );
  }
  // update book
  public updateBook(book$: Book): void{
    this.bookService.updateBook(book$).subscribe(
      (book => console.log(book)),
      (error => console.log(error))
    );
  }
  // employee
  // get all employee
  public getAllEmployee(): void{
    this.employeeService.getAllEmployee().subscribe(
      (employees => console.log(employees)),
      (error => console.log(error))
    );
  }
  // get employee by id
  public getEmployeeById(id$: number): void{
    this.employeeService.getEmployeeById(id$).subscribe(
      (employee => console.log(employee)),
      (error => console.log(error))
    );
  }
  // post all employee
  public postAllEmployee(employees$: Employee[]): void{
    this.employeeService.postAllEmployee(employees$).subscribe(
      (employees => console.log(employees)),
      (error => console.log(error))
    );
  }
  // post one employee
  public postEmployee(employee$: Employee): void{
    this.employeeService.postOneEmployee(employee$).subscribe(
      (employee => console.log(employee)),
      (error => console.log(error))
    );
  }
  // delete employee by id
  public deleteEmployeeById(id$: number): void{
    this.employeeService.deleteEmployeeById(id$).subscribe(
      (res => console.log(res)),
      (error => console.log(error))
    );
  }
  // delete employee by obj
  public deleteEmployee(employee$: Employee): void{
    this.employeeService.deleteEmployee(employee$).subscribe(
      (res => console.log(res)),
      (error => console.log(error))
    );
  }
  // update employee by obj
  public updateEmployee(employee$: Employee): void{
    this.employeeService.updateEmployee(employee$).subscribe(
      (res => console.log(res)),
      (error => console.log(error))
    );
  }
  // laptop
  // get all laptop
  public getAllLaptop(): void{
    this.laptopService.getAllLaptop().subscribe(
      (laptops => console.log(laptops)),
      (error => console.log(error))
    );
  }
  // get laptop by id
  public getLaptopById(id$: number): void{
    this.laptopService.getLaptopById(id$).subscribe(
      (res => console.log(res)),
      (error => console.log(error))
    );
  }
  // post all laptop
  public postAllLaptop(laptops$: Laptop[]): void{
    this.laptopService.postAllLaptop(laptops$).subscribe(
      (laptops => console.log(laptops)),
      (error => console.log(error))
    );
  }
  // post one laptop
  public postOneLaptop(laptop$: Laptop): void{
    this.laptopService.postOneLaptop(laptop$).subscribe(
      (laptop => console.log(laptop)),
      (error => console.log(error))
    );
  }
  // delete laptop by id
  public deleteLaptopById(id$: number): void{
    this.laptopService.deleteLaptopById(id$).subscribe(
      (res => console.log(res)),
      (error => console.log(error))
    );
  }
  // delete laptop by obj
  public deleteLaptop(laptop$: Laptop): void{
    this.laptopService.deleteLaptop(laptop$).subscribe(
      (res => console.log(res)),
      (error => console.log(error))
    );
  }
  // update laptop by obj
  public updateLaptop(laptop$: Laptop): void{
    this.laptopService.updateLaptop(laptop$).subscribe(
      (laptop => console.log(laptop)),
      (error => console.log(error))
    );
  }
  // student
  // get all student
  public getAllStudent(): void{
    this.studentService.getAllStudent().subscribe(
      (students => console.log(students)),
      (error => console.log(error))
    );
  }
  // get student by id
  public getStudentById(id$: number): void{
    this.studentService.getStudentById(id$).subscribe(
      (student => console.log(student)),
      (error => console.log(error))
    );
  }
  // post all student
  public postAllStudent(students$: Student[]): void{
    this.studentService.postAllStudent(students$).subscribe(
      (students => console.log(students)),
      (error => console.log(error))
    );
  }
  // post one student
  public postOneStudent(student$: Student): void{
    this.studentService.postOneStudent(student$).subscribe(
      (student => console.log(student)),
      (error => console.log(error))
    );
  }
  // delete student by id
  public deleteStudentById(id$: number): void{
    this.studentService.deleteStudentById(id$).subscribe(
      (res => console.log(res)),
      (error => console.log(error))
    );
  }
  // delete student by obj
  public deleteStudent(student$: Student): void{
    this.studentService.deleteStudent(student$).subscribe(
      (res => console.log(res)),
      (error => console.log(error))
    );
  }
  // update student by obj
  public updateStudent(student$: Student): void{
    this.studentService.updateStudent(student$).subscribe(
      (student => console.log(student)),
      (error => console.log(error))
    );
  }
  // teacher
  // get all teacher
  public getAllTeacher(): void{
    this.teacherService.getAllTeacher().subscribe(
      (teachers => console.log(teachers)),
      (error => console.log(error))
    );
  }
  // get teacher by id
  public getTeacherById(id$: number): void{
    this.teacherService.getTeacherById(id$).subscribe(
      (teacher => console.log(teacher)),
      (error => console.log(error))
    );
  }
  // post all teacher
  public postAllTeacher(teachers$: Teacher[]): void{
    this.teacherService.postAllTeacher(teachers$).subscribe(
      (teachers => console.log(teachers)),
      (error => console.log(error))
    );
  }
  // post one teacher
  public postOneTeacher(teacher$: Teacher): void{
    this.teacherService.postOneTeacher(teacher$).subscribe(
      (teacher => console.log(teacher)),
      (error => console.log(error))
    );
  }
  // delete teacher by id
  public deleteTeacherById(id$: number): void{
    this.teacherService.deleteTeacherById(id$).subscribe(
      (res => console.log(res)),
      (error => console.log(error))
    );
  }
  // delete teacher by obj
  public deleteTeacher(teacher$: Teacher): void{
    this.teacherService.deleteTeacher(teacher$).subscribe(
      (res => console.log(res)),
      (error => console.log(error))
    );
  }
  // update teacher by obj
  public updateTeacher(teacher$: Teacher): void{
    this.teacherService.updateTeacher(teacher$).subscribe(
      (teacher => console.log(teacher)),
      (error => console.log(error))
    );
  }

  ngOnInit(): void{
  }
}
