import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email';
  soggetto: string="";

  constructor() {}

  ngOnInit() {}

  mandaEmail(s, t) {
    var stringa = s.concat("\n", t)

    alert(stringa);
  }
}
