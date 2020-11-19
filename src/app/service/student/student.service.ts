import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiURL} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Student} from '../../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpClient: HttpClient
  ) { }
  private apiURL = apiURL;

  // get all student
  public getAllStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.apiURL + '/students');
  }
  // get student by id
  public getStudentById(id$: number): Observable<Student> {
    return this.httpClient.get<Student>(this.apiURL + `/student/${id$}`);
  }
  // post all student
  public postAllStudent(students$: Student[]): Observable<Student[]> {
    return this.httpClient.post<Student[]>(this.apiURL + '/students', students$);
  }
  // post one student
  public postOneStudent(student$: Student): Observable<Student> {
    return this.httpClient.post(this.apiURL + '/student', student$);
  }
  // delete student by id
  public deleteStudentById(id$: number): Observable<string> {
    // @ts-ignore
    return this.httpClient.delete<string>(this.apiURL + `/student/${id$}`, {responseType: 'text'});
  }
  // delete student by obj
  public deleteStudent(student$: Student): Observable<string> {
    const header = new Headers();
    const body = student$;
    const responseType = 'text';
    const withCredentials = false;
    const reportProgress = false;

    header.append('Content-Type', 'json');

    const option = {
      header,
      body,
      reportProgress,
      responseType,
      withCredentials
    };
    // @ts-ignore
    return this.httpClient.delete<string>(this.apiURL + '/student', option);
  }
  // update student obj
  public updateStudent(student$: Student): Observable<Student> {
    return this.httpClient.put<Student>(this.apiURL + '/student', student$);
  }
}
