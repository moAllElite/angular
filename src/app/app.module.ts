import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ArticleComponent } from './article/article.component';
import {FormsModule} from "@angular/forms";
import{registerLocaleData} from "@angular/common";
import * as fr from  "@angular/common/locales/fr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {DataService} from "../services/data.service";
import { ListeComponent } from './liste/liste.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AddReactifComponent } from './add-reactif/add-reactif.component';
import {ReactiveFormsModule} from "@angular/forms";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ListeComponent,
    DetailsComponent,
    PageNotFoundComponent,
    AjouterComponent,
    AddReactifComponent,
  ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatIconModule,
        MatButtonToggleModule,
        MatButtonModule,
        RouterOutlet,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
  providers: [
      DataService,
      {provide:LOCALE_ID,useValue:"fr-FR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far,fab);
    registerLocaleData(fr.default);
  }
}
