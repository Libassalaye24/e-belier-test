import { Component, inject, OnInit } from '@angular/core';
import { AccueilService } from '../../services/accueil.service';

@Component({
  selector: 'app-bloc-stats',
  templateUrl: './bloc-stats.component.html',
  styleUrls: ['./bloc-stats.component.scss']
})
export class BlocStatsComponent implements OnInit  {

  accueilService=inject(AccueilService)
  customerBalance$ : any 

  ngOnInit() {
    this.getCustomerBalance();
  }

  async getCustomerBalance() {
    this.customerBalance$ = await this.accueilService.getCustomerBalance()
    console.log(this.customerBalance$)
  }
}
