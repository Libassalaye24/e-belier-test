import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComaToSpacePipe } from './pipe/coma-to-space/coma-to-space.pipe';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BlocStatsComponent } from './components/bloc-stats/bloc-stats.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { Base64PipePipe } from './pipe/base-64/base64-pipe.pipe';
import { PriceFormatPipe } from './pipe/price-format/price-format.pipe';
import { CementProductComponent } from './components/cement-product/cement-product.component';
import { OrderStatusColorComponent } from './components/order-status-color/order-status-color.component';



@NgModule({
  declarations: [
    ComaToSpacePipe,
    SearchInputComponent,
    BreadcrumbComponent,
    BlocStatsComponent,
    PaginatorComponent,
    Base64PipePipe,
    PriceFormatPipe,
    CementProductComponent,
    OrderStatusColorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ToastrModule,
    ComaToSpacePipe,
    SearchInputComponent,
    BreadcrumbComponent,
    PaginatorComponent,
    Base64PipePipe,
    CementProductComponent,
    PriceFormatPipe,
    OrderStatusColorComponent
  ]
})
export class SharedModule { }
