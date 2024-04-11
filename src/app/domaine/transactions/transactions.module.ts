import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './views/transactions.component';
import {SharedModule} from "../../application/shared/shared.module";


@NgModule({
  declarations: [
    TransactionsComponent
  ],
    imports: [
        CommonModule,
        TransactionsRoutingModule,
        SharedModule
    ]
})
export class TransactionsModule { }
