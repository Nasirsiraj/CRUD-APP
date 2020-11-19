import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {Book} from '../../model/book.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.scss']
})
export class AllBookComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }
  public books: Book[] = [];
  public tableColumns = ['id', 'subject', 'bookName', 'writerName', 'price', 'action'];

  updateBooks(): void{
    this.bookService.getAllBook().subscribe(
      (books => {
        this.books = books;
      }),
      (error => console.log((error as Error).message))
    );
  }
  deleteBook(id$: number): void{
    this.bookService.deleteBookById(id$).subscribe(
      (res => {
        console.log(res);
        this.updateBooks();
      }),
      (error => console.log(error))
    );
  }
  editBook(id$: number): void{
    this.router.navigate(['/dashboard/update-book', id$]);
  }
  ngOnInit(): void {
    this.updateBooks();
  }

}
