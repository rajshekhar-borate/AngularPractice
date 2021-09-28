import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  personFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.personFormGroup = this.fb.group({
      personFormGroupArray: this.fb.array([
        this.fb.group({
          username: ['', [Validators.required, Validators.minLength(6)]],
          fname: [''],
          lname: [''],
          address: this.fb.group({
            pin: ['', [Validators.required, Validators.minLength(6)]],
            city: [''],
          }),
          hobbies: this.fb.array([this.fb.control('')]),
        }),
      ]),
    });
  }

  hobbies(i) {
    return this.personFormGroupArray.controls[i].get('hobbies') as FormArray;
  }

  addHobby(i) {
    this.hobbies(i).push(this.fb.control(''));
  }
  get personFormGroupArray() {
    return this.personFormGroup.get('personFormGroupArray') as FormArray;
  }
  addPerson() {
    this.personFormGroupArray.push(
      this.fb.group({
        username: ['', [Validators.required, Validators.minLength(6)]],
        fname: [''],
        lname: [''],
        address: this.fb.group({
          pin: ['', [Validators.required, Validators.minLength(6)]],
          city: [''],
        }),
        hobbies: this.fb.array([this.fb.control('')]),
      })
    );
  }

  submit() {}

  username(i) {
    return this.personFormGroupArray.controls[i].get('username') as FormControl;
  }
  fname(i) {
    return this.personFormGroupArray.controls[i].get('fname') as FormControl;
  }
  lname(i) {
    return this.personFormGroupArray.controls[i].get('lname') as FormControl;
  }
  pin(i) {
    return (
      this.personFormGroupArray.controls[i].get('address') as FormGroup
    ).get('pin');
  }
  city(i) {
    return (
      this.personFormGroupArray.controls[i].get('address') as FormGroup
    ).get('city');
  }
}
