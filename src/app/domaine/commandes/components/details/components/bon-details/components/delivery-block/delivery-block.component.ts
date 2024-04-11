import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delivery-block',
  templateUrl: './delivery-block.component.html',
  styleUrls: ['./delivery-block.component.scss']
})
export class DeliveryBlockComponent {

  @Input({required: true, alias: 'bcNumber'}) bcNumber : string = '';
  @Input({required: true, alias: 'deliveryType'}) deliveryType : string = '';
  @Input({required: true, alias: 'deliveryPlantName'}) deliveryPlantName : string = '';
  @Input({required: true, alias: 'shippingPointName'}) shippingPointName : string = '';

}
