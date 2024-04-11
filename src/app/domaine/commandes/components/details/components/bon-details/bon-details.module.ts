import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonDetailsRoutingModule } from './bon-details-routing.module';
import { BonDetailsComponent } from './view/bon-details.component';
import { SharedModule } from 'src/app/application/shared/shared.module';
import { DeliveryBlockComponent } from './components/delivery-block/delivery-block.component';
import { NotationComponent } from './components/notation/notation.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { RatingComponent } from './components/rating/rating.component';


@NgModule({
  declarations: [
    BonDetailsComponent,
    DeliveryBlockComponent,
    NotationComponent,
    TrackingComponent,
    RatingComponent

  ],
  imports: [
    CommonModule,
    BonDetailsRoutingModule,
    SharedModule
  ]
})
export class BonDetailsModule { }
