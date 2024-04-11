import { Component , OnInit, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { Unsub } from 'src/app/application/shared/utils/unsub.class';
import { DemandeService } from '../../services/demande/demande.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent extends Unsub implements OnInit{
  fb=inject(FormBuilder)
  demandeService=inject(DemandeService)
  toastr = inject(ToastrService)
  router=inject(Router)
  form : FormGroup;
  isLoading = false;
  user$:Observable<any> | undefined
  userError$:Observable<any> | undefined
  constructor() {
    super();
    this.form = this.fb.group({
      type : ['' , Validators.required , Validators.minLength(3)],
      body : ['' , Validators.required , Validators.minLength(3)]
    })
  }
  ngOnInit() : void{
    initFlowbite();
    this.showSuccess();
  }


  onSubmit() {
    this.isLoading = true;
    this.demandeService.saveClaim(this.form.value).pipe(takeUntil(this.unsubscribe$)).subscribe(
      {
        next: (reponse: any) => {
          this.isLoading = false
          console.log(reponse);
        //  this.router.navigate(['/commandes'])
          this.showSuccess();
        },
        error: (error:any) => {
          console.log(error);
          this.userError$ = of(error?.error?.detail || 'Une erreur est survenue');
          this.isLoading = false
        },
      }
      )
    }


    get type() {
      return this.form.get('type');
    }
    get body() {
      return this.form.get('body');
    }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
