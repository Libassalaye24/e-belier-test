import { DatePipe } from '@angular/common';
import { Injectable, Signal, inject ,  } from '@angular/core';
import { IFacture } from 'src/app/application/shared/models/IFacture';
import { HttpService } from 'src/app/application/shared/services/httpService/http.service';
import { first, map, Observable } from "rxjs";
import { IAttachment } from "src/app/application/shared/models/IAttachment";
import { toSignal } from '@angular/core/rxjs-interop';
@Injectable({
  providedIn: 'root'
})
export class FacturesService {


  httpService = inject(HttpService)
  datePipe = inject(DatePipe)
  constructor() { }



  extractDateRange() {
    const today = new Date();
    const threeMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());
    const dateFrom = this.datePipe.transform(threeMonthsAgo, "yyyy-MM-dd");
    const dateTo = this.datePipe.transform(today, "yyyy-MM-dd");
    return { dateFrom, dateTo };
  }
  
   getFactures() {
    const { dateFrom, dateTo } = this.extractDateRange();
    const url = `docs/invoice/${dateFrom}/${dateTo}`
    return this.httpService.getItems(url);
  }


  getDeliveryList(invoiceNumber : string) {
    const { dateFrom, dateTo } = this.extractDateRange();
    const url = `docs/invoice/item/${invoiceNumber}/${dateFrom}/${dateTo}`
    return this.httpService.getItems(url);
  }

  getInvoiceDoc(invoiceNumber : string): Observable<IAttachment> {
    // docs/invoice/attachment/
    const url = `docs/invoice/attachment/${invoiceNumber}`;
    return this.httpService.getItems(url)
  }
  getDeliveryDoc(deliveryNumber : string): Observable<IAttachment> {
    // docs/invoice/attachment/
    const url = `docs/delivery/attachment/${deliveryNumber}`;
    return this.httpService.getItems(url)
  }

   getInvoicesSignal(): Signal<IFacture[]> {
    const { dateFrom, dateTo } = this.extractDateRange();
    const url = `docs/invoice/${dateFrom}/${dateTo}`
    const observable = this.httpService.getItems(url);
    return toSignal(observable , {initialValue: []});
  }


}


