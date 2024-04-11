import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoGeneralRoutingModule } from './info-general-routing.module';
import { InfoGeneralComponent } from './view/info-general.component';
import { InfoBankComponent } from './components/info-bank/info-bank.component';


@NgModule({
  declarations: [
    InfoGeneralComponent,
    InfoBankComponent
  ],
  imports: [
    CommonModule,
    InfoGeneralRoutingModule
  ]
})
export class InfoGeneralModule { }
