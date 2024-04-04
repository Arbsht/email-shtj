import { Component } from '@angular/core';
import { Email } from './email';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email';
  email = new Email();

  constructor() {}

  ngOnInit() {}
 
  mandaEmail(s,t) {
    this.email.mandaEmail(s,t);
  }
}
