import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditComponent} from "./edit/edit.component";
import {CreateComponent} from "./create/create.component";
import {DetailComponent} from "./detail/detail.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {path: '',component: ListComponent},
  {path: 'edit/:id',component: EditComponent},
  {path: 'create',component: CreateComponent},
  {path: 'detail/:id',component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
