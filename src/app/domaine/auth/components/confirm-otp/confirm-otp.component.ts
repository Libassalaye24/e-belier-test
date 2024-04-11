import { Component, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, takeUntil } from 'rxjs';
import { ELogin } from 'src/app/application/shared/models/ELogin';
import { Unsub } from 'src/app/application/shared/utils/unsub.class';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.scss']
})
export class ConfirmOtpComponent extends Unsub {

  authService = inject(AuthService)
  fb = inject(FormBuilder)
  router = inject(Router)
  userError$:Observable<any> | undefined
  form : FormGroup;
  isLoading = false;
  otp: string[] = ['', '', '', '', '', ''];

  @Output() nextComponent = new EventEmitter<any>();
  @Input() phoneNumber :string | undefined;
  @Input() username :string | undefined;
  

  constructor() {
    super();
    this.form = this.fb.group({
      otpCode: new FormControl('', [
        Validators.required
      ]),
      phoneNumber: new FormControl('', [
        Validators.required
      ])
    })
  }
  
  focusNext(event: any, index: number) {
    if (event.target.value !== '') {
      const nextInput = event.target.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  onBackspace(event: any) {
    const target = event.target as HTMLInputElement;
    const previousInput = event.target.previousElementSibling as HTMLInputElement;
    if (event.key === 'Backspace' && !target.value && target.previousElementSibling) {
      previousInput.focus();
    }
  }

  next() {
    this.nextComponent.emit({state: ELogin.confirmOTP});
  }

  previous() {
    this.nextComponent.emit({state: ELogin.OTPLogin});
  }
  
  onSubmit() {
    this.isLoading = true;
    this.form.setValue({
      otpCode: this.otp.join('') ,
      phoneNumber: this.phoneNumber
    });
    this.authService.completeLogin(this.form.value).pipe(takeUntil(this.unsubscribe$)).subscribe(
      {
        next: (reponse: any) => {
          localStorage.setItem('token', reponse.id_token);
          console.log(reponse);
          if (reponse?.is_cgu_accepted){
            this.router.navigate(['/accueil'])
          }else{
            this.nextComponent.emit({showCgu:true, state: ELogin.confirmOTP});
           }
          this.isLoading = false
        },
        error: (error:any) => {
          console.log(error);
          this.userError$ = of(error.error?.detail || 'Login ou mot de passe incorrect');
          this.isLoading = false;
        }
      }
      )  
    }
  
}
