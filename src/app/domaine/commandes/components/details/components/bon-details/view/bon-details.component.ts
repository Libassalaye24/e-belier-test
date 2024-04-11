import {AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import { CommandeService } from 'src/app/domaine/commandes/services/commande.service';
import { ActivatedRoute } from '@angular/router';
import {IProduct} from "../../../../../../../application/shared/models/IProduct";

import {
  CementProductComponent
} from "../../../../../../../application/shared/components/cement-product/cement-product.component";
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-bon-details',
  templateUrl: './bon-details.component.html',
  styleUrls: ['./bon-details.component.scss']
})
export class BonDetailsComponent implements OnInit{

  service=inject(CommandeService)
  activatedRoute=inject(ActivatedRoute)
  code : string = "";
  quantity: string = "29"
  status: string = '';
  amount: string = "100 000"
  bcNumber: string|null = '';
  isLoading : boolean = false;
  constructor(){}
  blDatas : any;
  customerOrderNumber : string|null = '';
  product : IProduct = {};

  ngOnInit(){
    initFlowbite();
    this.customerOrderNumber = this.activatedRoute.snapshot.paramMap.get('id');
    this.bcNumber = this.activatedRoute.snapshot.paramMap.get('bcNumber');
    this.getOrder()
    this.getSdoByLogonOrderNos()

  }

  getSdoByLogonOrderNos() {
    if (this.bcNumber != null) {
      this.isLoading = true;
      this.service.getSdoDetails(this.bcNumber).subscribe(
        {
          next : (response : any) =>{
              console.log("data details sdo order {} " , response.responses[0].orderDatas[0])
              this.isLoading = false;
              this.blDatas = response.responses[0].orderDatas[0];
          },
          error : (error : any) => {
            this.isLoading = false;
              console.log("error to retrive order {} " , error)
          }
        }
      )
    }

  }

  getOrder () {
    this.service.getCommandes(this.customerOrderNumber!).subscribe(
      {
        next : (response : any) =>{
            console.log("data response details customerOrderNumber {} " , response.responses[0].orderDatas[0])
            this.quantity = response.responses[0].orderDatas[0].logonCustomerOrderItem.logonCustomerOrderItemData[0].orderedQty;
            this.code =  response.responses[0].orderDatas[0].logonCustomerOrderItem.logonCustomerOrderItemData[0].sapMaterialNo
            this.status = response.responses[0].orderDatas[0].customeroOrderStatusDescription;
        },
        error : (error : any) => {
            console.log("error to retrive my order {} " , error)
        }
      }
    )
  }

  getProductFromChildComponent(p:IProduct) {
    this.product = p;
    console.log("getProductFromChildComponent {} ", p.packaging)
  }
}
