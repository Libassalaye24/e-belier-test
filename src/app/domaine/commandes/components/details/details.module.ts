import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/application/shared/shared.module';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './view/details.component';
import { BonDenlevementComponent } from './components/bon-denlevement/bon-denlevement.component';


@NgModule({
  declarations: [
    DetailsComponent,
    BonDenlevementComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule
  ]
})
export class DetailsModule { }
