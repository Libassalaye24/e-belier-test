import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturesComponent } from './views/factures/factures.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  { path: '', component: FacturesComponent },
  { path: 'details/:invoiceNumber', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturesRoutingModule { }
