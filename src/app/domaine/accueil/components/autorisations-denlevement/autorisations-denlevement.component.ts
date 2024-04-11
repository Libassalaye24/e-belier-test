import { Component, inject, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { AuthService } from 'src/app/application/shared/services/auth/auth.service';
import { Unsub } from 'src/app/application/shared/utils/unsub.class';
import { AccueilService } from '../../services/accueil.service';

@Component({
  selector: 'app-autorisations-denlevement',
  templateUrl: './autorisations-denlevement.component.html',
  styleUrls: ['./autorisations-denlevement.component.scss']
})
export class AutorisationsDenlevementComponent implements OnInit {
  
  accueilService=inject(AccueilService);
  authService=inject(AuthService);
  isLoading!: boolean;
  orders$: any;
  
  ngOnInit() {
    this.getOrders();
  }
  
  async getOrders() {
    this.isLoading = true;
    this.orders$ = (!this.allowAdvancedOrder()) ? await this.accueilService.getCustomersSalesOrder() : await this.accueilService.getRecentOrders()
    this.isLoading = false
    console.log(this.orders$)
  }

  getStatusClass(status: string) {
    return (status = 'CREATED' || 'OPEN') ? 'green' : 'red';
  }
  

  allowAdvancedOrder() : boolean {
   return this.authService.getlogedUser()?.allowAdvancedOrder
  }

}
