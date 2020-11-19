import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiURL} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Book} from '../../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private httpClient: HttpClient
  ) { }
  public apiURL = apiURL;

  // get all book
  public getAllBook(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.apiURL + '/books');
  }
  // get book by id
  public getBookById(id$: number): Observable<Book> {
    return this.httpClient.get<Book>(this.apiURL + `/book/${id$}`);
  }
  // post all book
  public postAllBook(books$: Book[]): Observable<Book[]> {
    return this.httpClient.post<Book[]>(this.apiURL + '/books', books$);
  }
  // post one book
  public postOneBook(book$: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.apiURL + '/book', book$);
  }
  // delete book by id
  public deleteBookById(id$: number): Observable<string> {
    // @ts-ignore
    return this.httpClient.delete<string>(this.apiURL + `/book/${id$}`, {responseType: 'text'});
  }
  // delete book by obj
  public deleteBook(book$: Book): Observable<string> {
    const header = new Headers();
    const body = book$;
    const responseType = 'text';
    const withCredentials = false;
    const reportProgress = false;

    header.append('Content-Type', 'json');

    const  option = {
      header,
      body,
      reportProgress,
      responseType,
      withCredentials
    };
    // @ts-ignore
    return this.httpClient.delete<string>(this.apiURL + '/book', option);
  }
  // update book obj
  public updateBook(book$: Book): Observable<Book> {
    return this.httpClient.put<Book>(this.apiURL + '/book', book$);
  }
}
