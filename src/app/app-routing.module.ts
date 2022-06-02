import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookCreateComponent} from './book/book-create/book-create.component';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookEditComponent} from './book/book-edit/book-edit.component';
import {BookDeleteComponent} from './book/book-delete/book-delete.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'create',
    component: BookCreateComponent
  },
  {
    path: 'edit/:id',
    component: BookEditComponent
  },
  {
    path: 'delete/:id',
    component: BookDeleteComponent
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
