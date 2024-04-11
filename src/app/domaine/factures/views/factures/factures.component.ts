import { Component , OnInit, inject , Signal, computed} from '@angular/core';
import { FacturesService } from '../../services/factures.service';
import { initFlowbite } from 'flowbite';
import { IAttachment } from "src/app/application/shared/models/IAttachment";
import { ActivatedRoute , Router} from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { IFacture } from 'src/app/application/shared/models/IFacture';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.scss']
})
export class FacturesComponent implements OnInit{


  factureService = inject(FacturesService);
  route = inject(ActivatedRoute)
  router = inject(Router)
  factures : Signal<IFacture[]> = this.factureService.getInvoicesSignal()
  totalFacture : Signal<number> = computed(()=> this.factures.length)
  test$ = this.factureService.getFactures();
  test = toSignal(this.test$,{initialValue:[]})
  invoices$ : any;
  isLoading : boolean = false;
  downLoad : boolean = false;
  invoiceNumberDnl: string = '';
  constructor(){}
  ngOnInit(): void {

    this.getInvoices();
    initFlowbite();
  }


  getStatus(number: any): boolean {
    return number > 0 ;
  }


  navigateToDetails(invoiceNumber : string , invoiceDate : string) {
    this.router.navigate(['/factures/details', invoiceNumber], {
      state: { invoiceDate : invoiceDate}
    });
  }

  getInvoices() {
    this.isLoading = true;
    this.factureService.getFactures().subscribe(
    {
      next :(data : any)=> {
        this.isLoading = false;
          console.log("invoices {} ", data)
          this.invoices$ = data;
      },
      error:(error : any) => {
        this.isLoading = false;
        console.log("error {} " , error)
      }
    }

    )

  }
  getInvoiceAttachment(invoiceNumber : string) {
    this.invoiceNumberDnl = invoiceNumber;

    this.factureService.getInvoiceDoc(invoiceNumber).subscribe({
      next : (data : IAttachment) => {
        console.log("data " , data);
        this.downloadPdf(data.invoicePdfAsBase64! , data.invoiceName!);
        this.invoiceNumberDnl = '';

      },
      error : (error : any) => {
        console.log("error {} " ,error)
        this.invoiceNumberDnl = '';

      }
    })
  }

  downloadPdf(base64 : string , invoiceName : string) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const url= window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = url;
    a.download = invoiceName;
    a.click();
    window.URL.revokeObjectURL(url);
  }


  // $product = signal<any>(null);





}
