import {Component, Input} from '@angular/core';
import {Logger} from "angular2-logger/core";

export class PB {
  constructor(public name: string){}
}

@Component({
  template: `

    <form #form="ngForm">
 <input type="text"  class="form-control" id="name"
       required
       [(ngModel)]="pb.name" name="name">
<input name="test" id="test" [(ngModel)]="outerCounterValue">
      <counter-input name="counter" id="counter" [(ngModel)]="outerCounterValue"></counter-input>
    </form>

    <pre>{{ form.value | json }}</pre>


  TODO: remove this: {{pb.name}}
`
})
export class FormComponent {
  pb = new PB('testString');
  outerCounterValue=5
  constructor(private logger:Logger){
    this.logger.debug('Form Component');
  }


}