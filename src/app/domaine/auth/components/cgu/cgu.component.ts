import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, takeUntil } from 'rxjs';
import { ELogin } from 'src/app/application/shared/models/ELogin';
import { Unsub } from 'src/app/application/shared/utils/unsub.class';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.component.html',
  styleUrls: ['./cgu.component.scss']
})
export class CguComponent extends Unsub implements OnInit {

  authService=inject(AuthService)
  router=inject(Router)

  @Output() nextComponent = new EventEmitter<any>();
  @Output() showCgu = new EventEmitter<boolean>();
  @Input() username : string | undefined
  isLoading = false;
  cgu$ : any 

  constructor(){
    super();
  }
  ngOnInit() : void{
    this.getCgu();
  }

  async getCgu() {
    this.cgu$ = await this.authService.getCgu()
    console.log(this.cgu$)
  }


  onSubmit(isaccepted:boolean) {
    this.isLoading = true;
    this.authService.agreementsValidation({accepted:isaccepted, username :this.username}).pipe(takeUntil(this.unsubscribe$)).subscribe(
      {
        next: () => {         
          if(isaccepted){
            this.router.navigate(['/accueil'])
          }else{
            this.rejectCgu()
          }
        },
        error: (error:any) => {
          console.log(error);
        }
      }
      )  
    }

    rejectCgu() {
      this.showCgu.emit(false);
      this.nextComponent.emit({state: ELogin.OTPLogin});
    }
}
