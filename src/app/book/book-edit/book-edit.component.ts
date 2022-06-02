import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl('',[Validators.required]),
    author: new FormControl(),
    description: new FormControl()
  });
  id: number;
  constructor(private bookService: BookService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
    this.activatedRouter.paramMap.subscribe((paramMap)=>{
      this.id = + paramMap.get('id');
      this.getBookById(this.id);
    });
  }

  ngOnInit() {
  }

  get idControl() {
    return this.bookForm.get('id');
  }

  get titleControl() {
    return this.bookForm.get('title');
  }

  getBookById(id) {
    this.bookService.findById(id).subscribe((book)=>{
      this.bookForm = new FormGroup({
        id: new FormControl(book.id),
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      });
    });
  }

  update() {
    this.bookService.update(this.id, this.bookForm.value).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

}
