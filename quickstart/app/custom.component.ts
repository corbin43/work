import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import {Logger} from "angular2-logger/core";

//http://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html#demos
export function createCounterRangeValidator(maxValue, minValue) {
  return (c: FormControl) => {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue || 10,
        min: minValue || 0
      }
    };

  return (c.value > +maxValue || c.value < +minValue) ? err: null;
  }
}

@Component({
  selector: 'counter-input',
  template: `
    f1: <input [(ngModel)]="_f1Value" required>  {{_f1Value}} f2: <input [(ngModel)]="_f2Value"> {{_f2Value}}
  `,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CounterInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CounterInputComponent), multi: true }
  ]
})
export class CounterInputComponent implements ControlValueAccessor, OnChanges {

  propagateChange:any = () => {};
  validateFn:any = () => {};
  
  @Input('f1Value') _f1Value = "";
  _f2Value = "";
  //@Input() counterRangeMax;
  //@Input() counterRangeMin;

  constructor(private logger:Logger){
      this.logger.info('CounterInputComponent cons');
  }
  
  get f1Value() {
    this.logger.info('CounterInputComponent f1v');
    return this._f1Value;
  }
  
  set f1Value(val) {
    this.logger.info('CounterInputComponent f2v');
    this._f1Value = val;
    this._f2Value = this._f1Value;
    this.propagateChange(val);
  }

  
  ngOnChanges(inputs) {
    this.logger.info('CounterInputComponent onchange');
   // if (inputs.counterRangeMax || inputs.counterRangeMin) {
   //   this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
   // }
  }

  writeValue(value) {
    this.logger.info('CounterInputComponent wv');
    if (value) {
      this._f1Value = value;
      this._f2Value = this._f1Value;
    }
  }

  registerOnChange(fn) {
    this.logger.info('CounterInputComponent roc');
    this.propagateChange = fn;
  }

  registerOnTouched() {this.logger.info('CounterInputComponent rot');}

  validate(c: FormControl) {
    this.logger.info('CounterInputComponent val');
    return this.validateFn(c);
  }
}