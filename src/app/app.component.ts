import { Component } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyAQZegDwgV15IgTVtfwW34uwWaYtCQZ7xw",
      authDomain: "app-book-1234.firebaseapp.com",
      databaseURL: "https://app-book-1234.firebaseio.com",
      projectId: "app-book-1234",
      storageBucket: "app-book-1234.appspot.com",
      messagingSenderId: "1006424299764"
    };
    firebase.initializeApp(config);
  }
}
