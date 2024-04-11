import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-status-color',
  templateUrl: './order-status-color.component.html',
  styleUrls: ['./order-status-color.component.scss']
})
export class OrderStatusColorComponent {
  @Input({required: true, alias: 'status'}) status: string='';
  orderStatusClasses: { [key: string]: string } = {};
  constructor() {
    // Nouveau
    this.orderStatusClasses['Scheduled'] = 'bg-gray-400';
    this.orderStatusClasses['Transmitted to pool'] = 'bg-gray-400';
    this.orderStatusClasses['New'] = 'bg-gray-400';
    // Terminées
    this.orderStatusClasses['Finished'] = 'bg-ebelierGreen';
    // En cours
    this.orderStatusClasses['Arrived at loadingpoint'] = 'bg-secondary';
    this.orderStatusClasses['Loaded'] = 'bg-ebelierGreen';
    this.orderStatusClasses['Loading'] = 'bg-ebelierGreen';
    // Annule
    this.orderStatusClasses['Deleted'] = 'bg-ebelierRed';
    this.orderStatusClasses['Canceled'] = 'bg-ebelierRed';
  }

  getOrderStatusClass(status: string): string {
    return this.orderStatusClasses[status] || '';
  }
}
