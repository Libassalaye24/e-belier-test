import { Component ,OnInit , inject} from '@angular/core';
import { CommandeService } from '../../../services/commande.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from "src/app/application/shared/models/IProduct";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  
  private service = inject(CommandeService)
  private activatedRoute = inject(ActivatedRoute);
  customerOrderNumber : string | null = null;
  
  order : any;
  isLoading : boolean = false;
  pictureLoading : boolean = false;
  product : IProduct = {};

  constructor(){}

  ngOnInit() {
    this.customerOrderNumber = this.activatedRoute.snapshot.paramMap.get('id');
    this.getOrder()
  }


  getOrder () {
    this.isLoading = true;
    this.service.getCommandes(this.customerOrderNumber!).subscribe(
      {
        next : (response : any) =>{
            console.log("data response order {} " , response.responses)
            this.isLoading = false;
            this.order = response.responses;
        },
        error : (error : any) => {
          this.isLoading = false;
            console.log("error to retrive order {} " , error)
        }
      }
    )
  }

 
}
