import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceClientRoutingModule } from './service-client-routing.module';
import { ServiceClientComponent } from './view/service-client.component';
import { DemandeComponent } from './components/demande/demande.component';
import { SharedModule } from 'src/app/application/shared/shared.module';
import { ReclamationComponent } from './components/reclamation/reclamation.component';


@NgModule({
  declarations: [
    ServiceClientComponent,
    DemandeComponent,
    ReclamationComponent
  ],
  imports: [
    CommonModule,
    ServiceClientRoutingModule,
    SharedModule
  ]
})
export class ServiceClientModule { }
