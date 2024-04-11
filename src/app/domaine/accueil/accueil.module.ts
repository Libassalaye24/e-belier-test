import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './view/accueil/accueil.component';
import { CardInfosComponent } from './components/card-infos/card-infos.component';
import { BlocStatsComponent } from './components/bloc-stats/bloc-stats.component';
import { SharedModule } from 'src/app/application/shared/shared.module';
import { ActionsRapidesComponent } from './components/actions-rapides/actions-rapides.component';
import { AutorisationsDenlevementComponent } from './components/autorisations-denlevement/autorisations-denlevement.component';


@NgModule({
  declarations: [
    AccueilComponent,
    CardInfosComponent,
    BlocStatsComponent,
    ActionsRapidesComponent,
    AutorisationsDenlevementComponent
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    SharedModule
  ]
})
export class AccueilModule { }
