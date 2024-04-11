import { Component , OnInit , inject} from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { initFlowbite } from 'flowbite';



@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit{

  service = inject(CommandeService)
  orders$ : any;
  isLoading : boolean = false;
  constructor() {}
  ngOnInit() : void{


    initFlowbite();

    this.getOrders();

  }

  getOrders () {
    this.isLoading = true;
    this.service.getCommandes().subscribe(
      {
        next : (response : any) =>{
            console.log("data response orders {} " , response.responses)
            this.isLoading = false;
            this.orders$ = response.responses;
        },
        error : (error : any) => {
          this.isLoading = false;
            console.log("error to retrive orders {} " , error)
        }
      }
    )
  }

  getStatus(st : string) {
    let newsT = ["New" , "Scheduled" , "Transmitted to pool", "Released for execution"];
    let Encours = ["Loaded" , "Loading" , "Arrived at loadingpoint"];
    let Terminees = ["Fini"];
    let annulee = ["Deleted"]
    let test;
    switch (st) {
      case "New" :
        test = "gray"
        break;
      case "yeyye" :

    }


  }
}
