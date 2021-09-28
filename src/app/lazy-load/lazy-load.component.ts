import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyService } from '../my.service';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.css'],
})
export class LazyLoadComponent implements OnInit {
  formControl: FormControl;
  constructor(
    private myService: MyService,
    private activatedRoute: ActivatedRoute
  ) {}
  name: string;
  ngOnInit() {
    this.formControl = new FormControl('');
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
    });
    this.name = this.myService.name;
  }
}
