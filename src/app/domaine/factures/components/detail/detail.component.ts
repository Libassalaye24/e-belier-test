import { Component , OnInit , Input , inject} from '@angular/core';
import { FacturesService } from '../../services/factures.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  deliveryList$ : any;
  isLoading : boolean = false;
  factureService = inject(FacturesService)
  route = inject(ActivatedRoute)
  invoiceNumber : string | null = null;
  invoiceDate : string | null = null;

  constructor() {}
  ngOnInit(){  
    this.invoiceNumber = this.route.snapshot.paramMap.get('invoiceNumber');
    this.invoiceDate = history.state['invoiceDate'];
    
    this.getDeliveryList();
    console.log("invoice number " , this.invoiceNumber!);
    console.log("invoice date " , this.invoiceDate!);

  }
  getDeliveryList() {
    this.isLoading = true;    
    this.factureService.getDeliveryList(`${this.invoiceNumber}`) .subscribe({
      next : (data : any) => {
        this.isLoading = false;
        this.deliveryList$ = data;
      },
      error : (error : any) => {
        this.isLoading = false;
          console.log("error {} " , error)
      }
    });
}
  handleDownload(deliveryNumber: string) {
   
    console.log('Téléchargement du fichier avec blNumber :', deliveryNumber);
  }

}
