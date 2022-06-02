import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  bookCount: number;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAll().subscribe((data) => {
      this.books = data;
      this.bookCount = data.length;
    }, (error) => {
    });
  }

}
