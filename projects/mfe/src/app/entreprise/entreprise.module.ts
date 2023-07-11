import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeEntrepriseComponent } from './liste-entreprise/liste-entreprise.component';
import { ENTREPRISE_ROUTES } from './entreprise.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListeEntrepriseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ENTREPRISE_ROUTES)
  ],
  exports: [
    ListeEntrepriseComponent
  ]

})
export class EntrepriseModule { }
