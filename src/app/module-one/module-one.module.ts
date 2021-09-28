import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one.component';
import { ModuleTwoModule } from '../module-two/module-two.module';
import { TwoComponent } from '../module-two/two.component';

@NgModule({
  imports: [CommonModule, ModuleTwoModule],
  declarations: [OneComponent],
  exports: [OneComponent, TwoComponent],
})
export class ModuleOneModule {}
