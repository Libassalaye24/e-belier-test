import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuiviCommandeComponent } from './views/suivi-commande.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: '', component: SuiviCommandeComponent },
  { path: 'details/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuiviCommandeRoutingModule { }
