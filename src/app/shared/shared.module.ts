import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

import { ValuePipe } from './pipes/value.pipe';
import { DoggoDirective } from './directives/doggo.directive';
import { DialogComponent } from './dialog/dialog.component';
import { DoggoCreateComponent } from './doggo-create/doggo-create.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ValuePipe,
    DoggoDirective,
    DialogComponent,
    DoggoCreateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    ValuePipe,
    DoggoDirective,
    DialogComponent,
    DoggoCreateComponent
  ]
})
export class SharedModule { }
