import { Component } from '@angular/core';
import {Logger} from "angular2-logger/core";
import {FirstComponent} from './first.component';
import {SecondComponent} from './second.component';
import { LoggerAppComponent } from './logger.component';
import { FormComponent } from './form.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>My First Angular 2 App</h1>
    <nav>
      <a routerLink="/first" routerLinkActive="active">First</a>
      <a routerLink="/second/1" routerLinkActive="active">Second</a>
      <a routerLink="/logger" routerLinkActive="active">Logger</a>
      <a routerLink="/form" routerLinkActive="active">Form</a>
    </nav>
    <router-outlet></router-outlet>
      `
})

export class AppComponent {
    constructor( private _logger: Logger ){
        this._logger.error('This is a priority level 1 error message...');
        this._logger.warn('This is a priority level 2 warning message...');
        this._logger.info('This is a priority level 3 warning message...');
        this._logger.debug('This is a priority level 4 debug message...');
        this._logger.log('This is a priority level 5 log message...');
    }
}
