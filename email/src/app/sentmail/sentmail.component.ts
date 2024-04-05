import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-sentmail',
  templateUrl: './sentmail.component.html',
  styleUrls: ['./sentmail.component.css']
})
export class SentmailComponent {
  @Input() email: any[] = [];


}
