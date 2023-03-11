import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListeComponent} from "./liste/liste.component";
import {RouterModule, Routes} from "@angular/router";
import {DetailsComponent} from "./details/details.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AjouterComponent} from "./ajouter/ajouter.component";


const routes:Routes=[
    {path:"",component:ListeComponent},
    {path:"liste",redirectTo:""},
    {path:"details/:id",component:DetailsComponent},
    {path:"ajouter",component:AjouterComponent},
    {path:"**",component:PageNotFoundComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
