import { NgModule } from "@angular/core";

@NgModule({
    imports: [],
    declarations: [],

})

export class Email {

  emails: { soggetto: string, mittente: string, destinatario: string, testo: string}[] = [];
    constructor() {}

  ngOnInit() {}

  mandaEmail(s, t, m, d) {
    const emailDaAggiungere = { soggetto:s, testo: t, mittente: m, destinatario: d};
    this.emails.push(emailDaAggiungere);
  }

}
