import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListeComponent} from "./liste/liste.component";
import {RouterModule, Routes} from "@angular/router";
import {DetailsComponent} from "./details/details.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AjouterComponent} from "./ajouter/ajouter.component";
import {AddReactifComponent} from "./add-reactif/add-reactif.component";


const routes:Routes=[
    {path:"",component:ListeComponent},
    {path:"liste",redirectTo:""},
    {path:"details/:id",component:DetailsComponent},
    {path:"ajouter/template",component:AjouterComponent},
    {path:"ajouter/reactif",component:AddReactifComponent},
    {path:"**",component:PageNotFoundComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
