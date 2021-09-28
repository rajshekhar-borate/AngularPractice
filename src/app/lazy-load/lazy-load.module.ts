import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { LazyLoadComponent } from './lazy-load.component';
import { MyService } from '../my.service';
import { ModuleOneModule } from '../module-one/module-one.module';

@NgModule({
  imports: [CommonModule, LazyLoadRoutingModule],
  declarations: [LazyLoadComponent],
  providers: [MyService],
})
export class LazyLoadModule {}
