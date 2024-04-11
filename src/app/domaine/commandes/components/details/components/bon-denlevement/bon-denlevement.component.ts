import { Component, OnInit, inject, Input } from '@angular/core';
import { CommandeService } from 'src/app/domaine/commandes/services/commande.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-bon-denlevement',
  templateUrl: './bon-denlevement.component.html',
  styleUrls: ['./bon-denlevement.component.scss']
})
export class BonDenlevementComponent implements OnInit{
  constructor(){}
  service=inject(CommandeService)
  blDatas :  any;
  router=inject(Router)
  isLoading : boolean = false;
  @Input({required: true, alias: "customerOrderNumber"}) customerOrderNos : string | null = '';
  @Input({required: true, alias: "productCode"}) productCode : string | null = '';
  @Input({required: true, alias: "quantity"}) quantity : string | null = '';

  ngOnInit(){
    this.getSdoByCustomerOrderNos();
  }

  getSdoByCustomerOrderNos() {
    if (this.customerOrderNos != null) {
      this.isLoading = true;
      this.service.getSdo(this.customerOrderNos).subscribe(
        {
          next : (response : any) =>{
              console.log("data response order {} " , response.responses)
              this.isLoading = false;
              this.blDatas = response.responses;
          },
          error : (error : any) => {
            this.isLoading = false;
              console.log("error  " , error)
          }
        }
      )
    }

  }

  get detailsRoute () {
    return `/commandes/details/${this.customerOrderNos!}/bon-livraison`;
  }
  navigateToDetails(blNumber:string) {
    this.router.navigate([this.detailsRoute,blNumber], {
      state: { productCode : this.productCode!, quantity: this.quantity!}
    });
  }



}
