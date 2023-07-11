import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrepriseModule } from './entreprise/entreprise.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EntrepriseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
