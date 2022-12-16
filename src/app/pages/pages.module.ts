import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';

import { DoggoItemComponent } from './doggo-list/doggo-item/doggo-item.component';
import { DoggoListComponent } from './doggo-list/doggo-list.component';
import { DoggoCreateComponent } from './doggo-create/doggo-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    DoggoListComponent,
    DoggoItemComponent,
    DoggoCreateComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DoggoListComponent,
    DoggoItemComponent
  ]
})
export class PagesModule { }
