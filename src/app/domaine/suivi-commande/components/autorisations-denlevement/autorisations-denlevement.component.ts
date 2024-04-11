import { Component , Input } from '@angular/core';

@Component({
  selector: 'suvi-commande-autorisations-denlevement',
  templateUrl: './autorisations-denlevement.component.html',
  styleUrls: ['./autorisations-denlevement.component.scss']
})
export class AutorisationsDenlevementComponent {

  @Input({ required: true , alias: 'orders'}) singleOrders : any;
  @Input({ required: true, alias: 'loader'}) isLoading : any;

  getStatusClass(status: string) {
    return (status = 'CREATED' || 'OPEN') ? 'yellow' : 'red';
  }
  


}
