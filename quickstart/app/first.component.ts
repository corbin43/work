import {Component} from '@angular/core';
import {Logger} from "angular2-logger/core";
import { TestService } from './test.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'first',
  template: `
    <h3>First Component</h3>
    <p>This is the content of FirstComponent: {{name}} - {{slowName}}</p>
  `
})
export class FirstComponent implements OnInit {
  name: string;
  slowName: string;
  constructor(public logger:Logger, private testSer:TestService){
    
    this.logger.error('FirstComponent');
     this.logger.info('Info FirstComponent');
     this.logger.debug('Debug FirstComponent');
  }

  ngOnInit(): void {
    this.testSer.getName().then(name => this.name = name);
    this.testSer.getSlowName().then(name => this.slowName = name);
  }
}

