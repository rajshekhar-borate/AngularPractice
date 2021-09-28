import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MyService } from './my.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      quantitySelector: [{ value: 5, disabled: true }],
    });
  }
}
