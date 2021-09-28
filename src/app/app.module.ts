import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { MyService } from './my.service';
import { ModuleOneModule } from './module-one/module-one.module';
import { ModuleTwoModule } from './module-two/module-two.module';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ModuleOneModule,
    ModuleTwoModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    QuantitySelectorComponent,
    ReactiveFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
