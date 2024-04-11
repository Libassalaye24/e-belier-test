import { Component , OnInit, inject} from '@angular/core';
import { HttpService } from 'src/app/application/shared/services/httpService/http.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from "src/app/application/shared/models/IProduct";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  httpService = inject(HttpService)
  route = inject(ActivatedRoute)
  isLoading : boolean = false;
  pictureLoading : boolean = false;
  orders$ : any
  orderId : string | null = null;
  product$ : IProduct = {};
  constructor() {}
  ngOnInit(){  
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.getOrderById();
  }
  getOrderById() {
    
    this.isLoading = true;
    this.httpService.getItems(`order/${this.orderId}`).subscribe({
      next : (response : any ) => {
        this.isLoading = false;
        console.log("respsonse {} " ,response)
        this.orders$ = response;
        this.getProductPicture(response.product.code!)
      },
      error : (error : any) => {
        this.isLoading = false;
        console.error("error " , error)
      }
    })
  }

  
  getProductPicture(poNumber : string) {
    this.pictureLoading = true;
    this.httpService.getItems(`order/products/${poNumber}`).subscribe({
      next : (response : any) => {
        console.log("response product picture {} " , response)
        this.pictureLoading = false;
        this.product$ = response
      },
      error : (error : any) => {
        console.log("error to get product picture {} " , error)
        this.pictureLoading = false;
      }
    })
  }


}