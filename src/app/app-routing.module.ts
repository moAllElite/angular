import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListeComponent} from "./liste/liste.component";
import {RouterModule, Routes} from "@angular/router";
import {DetailsComponent} from "./details/details.component";


const routes:Routes=[
    {path:"",component:ListeComponent},
    {path:"details/:id",component:DetailsComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
