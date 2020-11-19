import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiURL} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Employee} from '../../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private httpClient: HttpClient
  ) { }
  public apiURL = apiURL;

  // get all employee
  public getAllEmployee(): Observable<Employee[]> {
    return  this.httpClient.get<Employee[]>(this.apiURL + '/employees');
  }
  // get employee by id
  public getEmployeeById(id$: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.apiURL + `/employee/${id$}`);
  }
  // post all employee
  public postAllEmployee(employees$: Employee[]): Observable<Employee[]> {
    return this.httpClient.post<Employee[]>(this.apiURL + '/employees', employees$);
  }
  // post one employee
  public postOneEmployee(employee$: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.apiURL + '/employee', employee$);
  }
  // delete employee by id
  public deleteEmployeeById(id$: number): Observable<string> {
    // @ts-ignore
    return this.httpClient.delete<string>(this.apiURL + `/employee/${id$}`, {responseType: 'text'});
  }
  // delete employee by obj
  public deleteEmployee(employee$: Employee): Observable<string> {
    const header = new Headers();
    const body = employee$;
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
    return this.httpClient.delete<string>(this.apiURL + '/employee', option);
  }
  // update employee obj
  public updateEmployee(employee$: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.apiURL + '/employee', employee$);
  }
}
