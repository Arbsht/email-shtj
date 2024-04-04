import { NgModule } from "@angular/core";

@NgModule({
    imports: [],
    declarations: [],

})

export class Email {

    emails = [];
    constructor() {}

  ngOnInit() {}

  mandaEmail(s, t, m, d) {
    var stringa = s.concat("\n", t);
    var emailDaAggiungere = [m, d, s, t];
    this.emails.concat(emailDaAggiungere);
    alert(stringa);
  }
}
