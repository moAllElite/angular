import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListeComponent} from "./liste/liste.component";
import {RouterModule, Routes} from "@angular/router";


const routes:Routes=[
    {path:"liste",component:ListeComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
