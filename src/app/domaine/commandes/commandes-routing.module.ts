import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './view/commandes.component';
  const routes: Routes = [
  { path: '', component: CommandesComponent },
  { 
    path: 'details/:id',
    loadChildren: () => import('./components/details/details.module').then(m => m.DetailsModule),
    data: {
      breadcrumb: 'Détails',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesRoutingModule { }
