import { Component , Input } from '@angular/core';
import { IProduct } from "src/app/application/shared/models/IProduct";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent {


  @Input({required : true , alias: 'productCode'}) productCode : string = '';
  @Input({required: true, alias: 'totalPrice'}) totalPrice : number=0;
  @Input({required: true, alias: 'totalWeight'}) totalWeight : number=0;
  @Input({required: true, alias: 'loader'}) pictureLoading : boolean = false;
}
