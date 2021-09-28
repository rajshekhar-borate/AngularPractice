import { Injectable } from '@angular/core';
import { AppModule } from './app.module';
import { LazyLoadModule } from './lazy-load/lazy-load.module';

@Injectable()
export class MyService {
  name = 'My name';
  constructor() {}
}
