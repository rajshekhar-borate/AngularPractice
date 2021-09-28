import { Component, OnInit, SimpleChanges } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  personFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.personFormGroup = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      fname: [''],
      lname: [''],
      address: this.fb.group({
        pin: ['', [Validators.required, Validators.minLength(6)]],
        city: [''],
      }),
      hobbies: this.fb.array([this.fb.control('')]),
    });
  }

  get hobbies() {
    return this.personFormGroup.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  submit() {
    alert('Submit');
  }

  get username() {
    return this.personFormGroup.get('username') as FormControl;
  }
  get fname() {
    return this.personFormGroup.get('fname') as FormControl;
  }
  get lname() {
    return this.personFormGroup.get('lname') as FormControl;
  }
  get pin() {
    return (this.personFormGroup.get('address') as FormGroup).get('pin');
  }
  get city() {
    return (this.personFormGroup.get('address') as FormGroup).get('city');
  }
}
