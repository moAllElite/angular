import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SnapComponent } from './snap/snap.component';
import { ArticleComponent } from './article/article.component';
import {FormsModule} from "@angular/forms";
import{registerLocaleData} from "@angular/common";
import * as fr from  "@angular/common/locales/fr";

@NgModule({
  declarations: [
    AppComponent,
    SnapComponent,
    ArticleComponent
  ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        FormsModule
    ],
  providers: [
      {provide:LOCALE_ID,useValue:"fr-FR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far,fab);
    registerLocaleData(fr.default);
  }
}
