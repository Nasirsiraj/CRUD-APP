import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {Book} from '../../model/book.model';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  public bookForm: FormGroup = this.formBuilder.group({
    id: [null],
    subject: ['', [Validators.required]],
    bookName: ['', [Validators.required]],
    writerName: ['', [Validators.required]],
    price: [null, [Validators.required]]
  });
  getExistingBook(): void{
    this.bookService.getBookById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(
      (response => this.bookForm.setValue(response)),
      (error => console.log((error as Error).message))
    );
  }
  saveBook(): void{
    this.bookService.postOneBook(this.bookForm.value).subscribe(
      (response => {
        console.log(response);
        this.router.navigate(['/dashboard/all-book']);
      }),
      (error => console.log((error as Error).message))
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
    this.getExistingBook()
  }

}
