import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturesRoutingModule } from './factures-routing.module';
import { FacturesComponent } from './views/factures/factures.component';
import { DetailComponent } from './components/detail/detail.component';
import { SharedModule } from 'src/app/application/shared/shared.module';
import { BlBlockComponent } from './components/bl-block/bl-block.component';

@NgModule({

  declarations: [
    FacturesComponent,
    DetailComponent,
    BlBlockComponent
  ],
  imports: [
    CommonModule,
    FacturesRoutingModule,
    SharedModule
  ]
})
export class FacturesModule { }
