import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;
  constructor(private bookService: BookService,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paramMap) => {
      this.id = + paramMap.get('id');
      this.getBookById(this.id);
    });
  }

  ngOnInit() {
  }

  getBookById(id) {
    this.bookService.findById(this.id).subscribe((data) => {
      this.book = data;
    }, (error) => {
    });
  }

}
