import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  @Input({required: true, alias: 'poNumber'}) poNumber : string="";
  @Input({required: true, alias: 'totalWeight'}) totalWeight : number=0;
  @Input({required: true, alias: 'deliveryType'}) incoterm : string="";
  @Input({required: true, alias: 'orderDate'}) orderDateStr : string="";
  @Input({required: true, alias: 'comment'}) poComment : string="N/A";
  @Input({alias: 'conditionnement'}) conditionnement : string = "Vrac";
  @Input({required: true, alias: 'loader'}) loader : boolean = false;
}
