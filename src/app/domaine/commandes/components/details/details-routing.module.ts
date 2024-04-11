import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './view/details.component';

const routes: Routes = 
[
  { path: '', component: DetailsComponent }, 
  { path: 'bon-livraison/:bcNumber', 
  data: {
    breadcrumb: "Autorisation d'enlevement",
  },
    loadChildren: () => import('./components/bon-details/bon-details.module').then(m => m.BonDetailsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
