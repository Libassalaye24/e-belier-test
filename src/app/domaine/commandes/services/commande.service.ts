import { Injectable , inject } from '@angular/core';
import { HttpService } from 'src/app/application/shared/services/httpService/http.service';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  httpService = inject(HttpService)

  constructor() { }


  getCommandes(customerNumber?: string): Observable<any> {
    var url = `customer/order`;
    url += customerNumber ? `?customerOrderNos=${customerNumber}` : '';

    return this.httpService.getItems(url);
  }

  getSdo(customerNumber?: string): Observable<any> {
    let url = `sdo/customer-order`;
    url += customerNumber ? `?customerOrderNos=${customerNumber}` : '';
    return this.httpService.getItems(url);
  }
  getSdoDetails(logonOrderNos?: string): Observable<any> {
    let url = `sdo/customer-order`;
    url += logonOrderNos ? `?logonOrderNos=${logonOrderNos}` : '';
    return this.httpService.getItems(url);
  }

}
