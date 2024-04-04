import { NgModule } from "@angular/core";

@NgModule({
    imports: [],
    declarations: [],

})

export class Email {

    constructor() {}

  ngOnInit() {}

  mandaEmail(s, t) {
    var stringa = s.concat("\n", t)

    alert(stringa);
  }
}
