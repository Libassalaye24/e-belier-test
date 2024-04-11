import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/application/shared/services/httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {

  httpService=inject(HttpService)

  async getCustomerBalance() {
    const url = `credit/balance`;
    try {
      return await lastValueFrom(
        this.httpService.getItems(url)
      )
    } catch (err) {
      console.log(err)
      return err;
    }
  }

  async getCustomersSalesOrder() {
    const url = `order/count/single-order`;
    try {
      return await lastValueFrom(
        this.httpService.getItems(url,{count: 5})
      )
    } catch (err) {
      console.log(err)
      return err;
    }
  }

  async getRecentOrders() {
    const url = `orders`;
    try {
      return await lastValueFrom(
        this.httpService.getItems(url,{count: 5})
      )
    } catch (err) {
      console.log(err)
      return err;
    }
  }
}
