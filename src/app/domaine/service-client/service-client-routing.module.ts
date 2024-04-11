import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceClientComponent } from './view/service-client.component';

const routes: Routes = [{ path: '', component: ServiceClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceClientRoutingModule { }
