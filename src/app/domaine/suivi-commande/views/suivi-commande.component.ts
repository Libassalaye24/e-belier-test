import { Component , OnInit , inject} from '@angular/core';
import { HttpService } from 'src/app/application/shared/services/httpService/http.service';

@Component({
  selector: 'app-suivi-commande',
  templateUrl: './suivi-commande.component.html',
  styleUrls: ['./suivi-commande.component.scss']
})
export class SuiviCommandeComponent implements OnInit {

  httpService = inject(HttpService);

  orders$ : any;
  isLoading : boolean = false;
  constructor() {}

  ngOnInit() : void {
    this.getAllCustomerOrder();
  }
  
  getAllCustomerOrder() {
    this.isLoading = true;
    this.httpService.getItems("order").subscribe({
      next : (response : any ) => {
        this.isLoading = false;
        this.orders$ = response.responses;
      },
      error : (error : any) => {
        this.isLoading = false;
        console.error("error " , error)
      }
    })
  }
}
