import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoggoListComponent } from './pages/doggo-list/doggo-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"list", component: DoggoListComponent},
  {path:"", redirectTo: "list", pathMatch: "full"},
  {path:"**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
