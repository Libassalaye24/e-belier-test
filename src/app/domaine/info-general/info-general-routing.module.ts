import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoGeneralComponent } from './view/info-general.component';

const routes: Routes = [{ path: '', component: InfoGeneralComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoGeneralRoutingModule { }
