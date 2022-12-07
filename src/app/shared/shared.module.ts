import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

import { ValuePipe } from './pipes/value.pipe';
import { DoggoDirective } from './directives/doggo.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    ValuePipe,
    DoggoDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ValuePipe,
    DoggoDirective
  ]
})
export class SharedModule { }
