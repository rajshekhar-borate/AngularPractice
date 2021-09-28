import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuantitySelectorComponent),
      multi: true,
    },
  ],
})
export class QuantitySelectorComponent implements ControlValueAccessor {
  quantity = 0;
  onChange: Function;
  onTouched: Function;
  isDisabled = false;
  isTouched = false;
  @Input()
  increment = 1;

  writeValue(quantity: number): void {
    this.quantity = quantity;
  }

  registerOnChange(fn: any): void {
    console.log(fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log(fn);
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  add() {
    this.markAsTouched();
    this.quantity += this.increment;
    this.onChange(this.quantity);
  }

  minus() {
    this.markAsTouched();
    this.quantity -= this.increment;
    this.onChange(this.quantity);
  }

  markAsTouched() {
    if (!this.isTouched) {
      this.isTouched = true;
      this.onTouched();
    }
  }
}
