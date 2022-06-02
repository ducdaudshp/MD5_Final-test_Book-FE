import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = {};

  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl(),
    description: new FormControl()
  });
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
  }

  get idControl() {
    return this.bookForm.get('id');
  }

  get titleControl() {
    return this.bookForm.get('title');
  }

  createBookUsingReactiveForm() {
    this.bookService.create(this.bookForm.value).subscribe(() => {
      this.bookForm.reset();
    });
  }

}
