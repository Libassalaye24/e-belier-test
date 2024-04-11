import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonDetailsComponent } from './view/bon-details.component';

const routes: Routes = [{ path: '', component: BonDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonDetailsRoutingModule { }
