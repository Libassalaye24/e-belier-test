import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuiviCommandeRoutingModule } from './suivi-commande-routing.module';
import { SuiviCommandeComponent } from './views/suivi-commande.component';
import { DetailComponent } from './components/detail/detail.component';
import { SharedModule } from 'src/app/application/shared/shared.module';
import { AutorisationsDenlevementComponent } from './components/autorisations-denlevement/autorisations-denlevement.component';
import { ProduitComponent } from './components/produit/produit.component';
import { PrincipalComponent } from './components/principal/principal.component';


@NgModule({
  declarations: [
    SuiviCommandeComponent,
    DetailComponent,
    AutorisationsDenlevementComponent,
    ProduitComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    SuiviCommandeRoutingModule,
    SharedModule
  ]
})
export class SuiviCommandeModule { }
