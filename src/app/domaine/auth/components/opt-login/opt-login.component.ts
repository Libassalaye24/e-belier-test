import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, takeUntil } from 'rxjs';
import { ELogin } from 'src/app/application/shared/models/ELogin';
import { Unsub } from 'src/app/application/shared/utils/unsub.class';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-opt-login',
  templateUrl: './opt-login.component.html',
  styleUrls: ['./opt-login.component.scss']
})
export class OptLoginComponent extends Unsub {

  fb=inject(FormBuilder)
  authService=inject(AuthService)
  form : FormGroup;
  isLoading = false;
  phoneNumber : string | undefined;
  user$:Observable<any> | undefined
  userError$:Observable<any> | undefined
  
  @Output() nextComponent = new EventEmitter<any>();

  constructor() {
    super();
    this.form = this.fb.group({
      username: new FormControl('', [
        Validators.required
      ])
    })
  }
  
  // next() {
  //   this.nextComponent.emit(ELogin.confirmOTP);
  // }

  onSubmit() {
    this.isLoading = true;
    this.authService.login(this.form.value).pipe(takeUntil(this.unsubscribe$)).subscribe(
      {
        next: (reponse: any) => {
          this.phoneNumber = reponse?.phoneNumber;
          console.log(reponse);
          this.nextComponent.emit({state: ELogin.confirmOTP, phoneNumber:this.phoneNumber});
        //  this.router.navigate(['/commandes'])
        },
        error: (error:any) => {
          console.log(error);
          this.userError$ = of(error?.error?.detail || 'Login ou mot de passe incorrect');
          this.isLoading = false
        },
      }
      )  
    }
}
