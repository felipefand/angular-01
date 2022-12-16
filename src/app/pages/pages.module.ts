import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';

import { DoggoItemComponent } from './doggo-list/doggo-item/doggo-item.component';
import { DoggoListComponent } from './doggo-list/doggo-list.component';
import { DoggoCreateComponent } from '../shared/doggo-create/doggo-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DoggoCreatePageComponent } from './doggo-create-page/doggo-create-page.component';



@NgModule({
  declarations: [
    DoggoListComponent,
    DoggoItemComponent,
    PageNotFoundComponent,
    DoggoCreatePageComponent
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
