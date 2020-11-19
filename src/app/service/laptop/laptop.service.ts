import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiURL} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Laptop} from '../../model/laptop.model';
import {consoleTestResultHandler} from 'tslint/lib/test';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(
    private httpClient: HttpClient
  ) { }
  private apiURL = apiURL;

  // get all laptop
  public getAllLaptop(): Observable<Laptop[]> {
    return this.httpClient.get<Laptop[]>(this.apiURL + '/laptops');
  }
  // get laptop by id
  public getLaptopById(id$: number): Observable<Laptop> {
    return this.httpClient.get<Laptop>(this.apiURL + `/laptop/${id$}`);
  }
  // post all laptop
  public postAllLaptop(laptops$: Laptop[]): Observable<Laptop[]> {
    return this.httpClient.post<Laptop[]>(this.apiURL + '/laptops', laptops$);
  }
  // post one laptop
  public postOneLaptop(laptop$: Laptop): Observable<Laptop> {
    return this.httpClient.post<Laptop>(this.apiURL + '/laptop', laptop$);
  }
  // delete laptop by id
  public deleteLaptopById(id$: number): Observable<string> {
    // @ts-ignore
    return this.httpClient.delete<string>(this.apiURL + `/laptop/${id$}`, {responseType: 'text'});
  }
  // delete laptop by obj
  public deleteLaptop(laptop$: Laptop): Observable<Laptop> {
    const header = new Headers();
    const body = laptop$;
    const responseType = 'text';
    const withCredentials = false;
    const reportProgress = false;

    header.append('Content-Type', 'json');

    const option = {
      header,
      body,
      responseType,
      withCredentials,
      reportProgress
    };
    // @ts-ignore
    return this.httpClient.delete<string>(this.apiURL + '/laptop', option);
  }
  // update laptop obj
  public updateLaptop(laptop$: Laptop): Observable<Laptop> {
    return this.httpClient.put<Laptop>(this.apiURL + '/laptop', laptop$);
  }
}
