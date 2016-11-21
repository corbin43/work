import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, routedComponents } from './app.routing';
import { Logger, Options, Level } from "angular2-logger/core";
import { AppComponent }  from './app.component';
import { FormComponent } from './form.component';
import { TestService } from './test.service';
import { FormsModule }   from '@angular/forms';
import {CounterInputComponent} from './custom.component';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule],
  declarations: [ AppComponent, routedComponents, FormComponent, CounterInputComponent],
  bootstrap: [ AppComponent ],
  providers: [ Logger, TestService, {provide: Options, useValue: { level: Level.DEBUG }} ]
})
export class AppModule { }
