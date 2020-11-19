import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book/book.service';
import {Book} from '../../model/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) { }
  public book !: Book;
  public bookForm: FormGroup = this.formBuilder.group({
    id: [null],
    subject: ['', [Validators.required]],
    bookName: ['', [Validators.required]],
    writerName: ['', [Validators.required]],
    price: [null, [Validators.required]]
  });
  public onSubmit(): void{
    this.book = this.bookForm.value;
    this.saveBook(this.book);
  }
  private saveBook(book$: Book): void{
    this.bookService.postOneBook(book$).subscribe(
      (book => {
        console.log(book);
        this.bookForm.reset();
      }),
      (error => console.log(error))
    );
  }
  // getter and setter
  get id(){
    return this.bookForm.get('id');
  }
  get subject(){
    return this.bookForm.get('subject');
  }
  get bookName(){
    return this.bookForm.get('bookName');
  }
  get writerName(){
    return this.bookForm.get('writerName');
  }
  get price(){
    return this.bookForm.get('price');
  }
  ngOnInit(): void {

  }

}
