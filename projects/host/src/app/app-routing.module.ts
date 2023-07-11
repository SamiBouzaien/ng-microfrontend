import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const MFE_APP_URL = "http://localhost:4201/remoteEntry.js";
const routes: Routes = [
  {
    path: 'entreprise',
    loadChildren: () => import('mfe/EntrepriseModule').then((m) => m.EntrepriseModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
