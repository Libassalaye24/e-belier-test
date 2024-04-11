import { Component , OnInit , inject} from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { initFlowbite } from 'flowbite';
import { toSignal } from "@angular/core/rxjs-interop";
import { ITransactionDetails } from 'src/app/application/shared/models/ITransactionResponse';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit{

 private  service : TransactionService = inject(TransactionService);
  transactions$ : ITransactionDetails[] = [];
  isLoading : boolean = false;

  constructor() {}

  ngOnInit() : void
  {
    initFlowbite();
    this.getTransactionCash();
  }

  getStatus(type : any) : boolean {
    return type != "INV";
  }

  getTransactionCash() {
    this.isLoading = true;
    this.service.getTransactionCash().subscribe({
      next : (response : any) =>{
        this.isLoading = false;
        this.transactions$ = response.transactionDetails;
      },
      error : (error : any) =>{
        this.isLoading = false;
        console.log("error " , error)
      }
    })
  }







  // retriveAll = toSignal(this.service.getTransactionCash());
  // console.log("all items");
}
