import {Component, Input, inject, OnInit, Output, EventEmitter} from '@angular/core';
import { HttpService } from 'src/app/application/shared/services/httpService/http.service';
import { IProduct } from "src/app/application/shared/models/IProduct";

@Component({
  selector: 'app-cement-product',
  templateUrl: './cement-product.component.html',
  styleUrls: ['./cement-product.component.scss']
})
export class CementProductComponent implements OnInit{

  @Input({required: true, alias: 'code'}) productCode : string = '';
  @Input() amount : string = '';
  @Input() quantity : string = '';

  @Output() productEvent = new EventEmitter<IProduct>();


  pictureLoading : boolean = false;
  httpService=inject(HttpService)
  product : IProduct = {};

  constructor(){}
  ngOnInit(){
    if(this.productCode != null) {
        this.getProductByCode(this.productCode);
    }
  }

  getProductByCode(code : string) {
    this.pictureLoading = true;
    this.httpService.getItems(`order/products/${code}`).subscribe({
      next : (response : any) => {
        console.log("response product picture {} " , response)
        this.pictureLoading = false;
        this.product = response;

      },
      error : (error : any) => {
        console.log("error to get product picture {} " , error)
        this.pictureLoading = false;
      }
    })
  }

  getProduct() {
    this.productEvent.emit(this.product)
  }

}
