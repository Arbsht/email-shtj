import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-sentmail',
  templateUrl: './sentmail.component.html',
  styleUrls: ['./sentmail.component.css']
})
export class SentmailComponent {
  @Input() email: any[] = [];

  toggleEmail(index: number) {
    this.email[index].aperta = !this.email[index].aperta;
  }

  evidenzia(index: number) {
    this.email[index].evidenziato = !this.email[index].evidenziato;
  }
}
