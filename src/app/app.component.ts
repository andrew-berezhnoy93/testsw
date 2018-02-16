import {
  AngularFireDatabase,
  FirebaseObjectObservable,
  FirebaseListObservable
} from 'angularfire2/database-deprecated';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: FirebaseListObservable<any[]>;

  message: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    text: new FormControl(null, Validators.required)
  });
  constructor(db: AngularFireDatabase) {
    this.messages = db.list('messages');
  }

  send(event) {
    this.messages.push({
      ...event,
      date: new Date().toLocaleTimeString()
    });
  }
}
