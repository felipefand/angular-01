import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';

import { DoggoItemComponent } from './doggo-list/doggo-item/doggo-item.component';
import { DoggoListComponent } from './doggo-list/doggo-list.component';



@NgModule({
  declarations: [
    DoggoListComponent,
    DoggoItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DoggoListComponent,
    DoggoItemComponent
  ]
})
export class PagesModule { }
