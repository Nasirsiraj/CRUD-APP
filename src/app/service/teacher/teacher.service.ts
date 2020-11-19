import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiURL} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Teacher} from '../../model/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private httpClient: HttpClient
  ) { }
  public apiURL = apiURL;

  // get all teacher
  public getAllTeacher(): Observable<Teacher[]> {
   return this.httpClient.get<Teacher[]>(this.apiURL + '/teachers');
  }
  // get teacher by id
  public getTeacherById(id$: number): Observable<Teacher> {
    return this.httpClient.get<Teacher>(this.apiURL + `/teacher/${id$}`);
  }
  // post all teacher
  public postAllTeacher(teachers$: Teacher[]): Observable<Teacher[]> {
    return this.httpClient.post<Teacher[]>(this.apiURL + '/teachers', teachers$);
  }
  // post one teacher
  public postOneTeacher(teacher$: Teacher): Observable<Teacher> {
    return this.httpClient.post<Teacher>(this.apiURL + '/teacher', teacher$);
  }
  // delete teacher by id
  public deleteTeacherById(id$: number): Observable<string> {
    // @ts-ignore
    return this.httpClient.delete<string>(this.apiURL + `/teacher/${id$}`, {responseType: 'text'});
  }
  // delete teacher by obj
  public deleteTeacher(teacher$: Teacher): Observable<string> {
    const header = new Headers();
    const body = teacher$;
    const responseType = 'text';
    const reportProgress = false;
    const withCredentials = false;

    header.append('Content-Type', 'json');

    const option = {
      header,
      body,
      reportProgress,
      responseType,
      withCredentials
    };
    // @ts-ignore
    return this.httpClient.delete<string>(this.apiURL + '/teacher', option);
  }
  // update teacher obj
  public updateTeacher(teacher$: Teacher): Observable<Teacher> {
    return this.httpClient.put<Teacher>(this.apiURL + '/teacher', teacher$);
  }
}
