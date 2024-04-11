import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandesRoutingModule } from './commandes-routing.module';
import { CommandesComponent } from './view/commandes.component';
import { SharedModule } from 'src/app/application/shared/shared.module';


@NgModule({
  declarations: [
    CommandesComponent,
  ],
  imports: [
    CommonModule,
    CommandesRoutingModule,
    SharedModule
  ]
})
export class CommandesModule { }
