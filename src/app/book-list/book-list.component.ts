import { Component, OnDestroy, OnInit } from "@angular/core";
import { BooksService } from "../services/books.service";
import { Book } from "../models/book.model";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  booksSubscription: Subscription;
  public isAuth = false;

  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      user ? (this.isAuth = true) : (this.isAuth = false);

      if (user) {
        this.isAuth = true;
        console.log("liste des livres");

        this.booksSubscription = this.booksService.booksSubject.subscribe(
          (books: Book[]) => {
            console.log("gege");
            console.log(books);
            this.books = books;
          }
        );
        this.booksService.emitBooks();
      } else {
        this.isAuth = false;
      }
    });

    //this.booksService.getBooks();
  }

  onNewBook() {
    this.router.navigate(["/books/news"]);
  }

  onDeleteBook(book: Book) {
    this.booksService.removeBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(["/books/view/" + id]);
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }
}
