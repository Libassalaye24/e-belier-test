import { Injectable , inject } from '@angular/core';
import { HttpService } from 'src/app/application/shared/services/httpService/http.service';
import { Observable } from 'rxjs';
import { ITransactionResponse } from 'src/app/application/shared/models/ITransactionResponse';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  httpService = inject(HttpService)
  datePipe = inject(DatePipe)
  constructor() { }




  getTransactionCash() : Observable<ITransactionResponse>{
    const toDay = new Date();
    const threeMonthAgo = new Date(toDay.getFullYear() , toDay.getMonth() - 3 , toDay.getDate());
    const dateFrom = this.datePipe.transform(threeMonthAgo , "yyyy-MM-dd") ;
    const dateTo = this.datePipe.transform(toDay , "yyyy-MM-dd") ;
    const time = this.datePipe.transform(toDay , "hh:mm:ss") ;
    console.log("dateFrom " , dateFrom);
    console.log("dateTo " , dateTo);
    console.log("time " , time);
    const url = `cash/transaction?dateFrom=${dateFrom}T${time}&dateTo=${dateTo}T${time}`;
    console.log("url {} " , url)
    return this.httpService.getItems("cash/transaction?dateFrom=2023-06-23T10:15:30&dateTo=2023-08-24T10:15:30")
  }









  async getTransactionCashTest() {
    const url = `cash/transaction?dateFrom=2023-06-23T10:15:30&dateTo=2023-08-24T10:15:30`;
    try {

      return this.httpService.getItems(url);

    } catch (err) {
      console.log(err)
      return err;
    }
  }


}
