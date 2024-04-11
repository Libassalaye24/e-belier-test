import { Component , OnInit, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { Unsub } from 'src/app/application/shared/utils/unsub.class';
import { ReclamationService } from '../../services/reclamation/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent extends Unsub implements OnInit{
  fb=inject(FormBuilder)
  service=inject(ReclamationService) 
  router=inject(Router)
  form : FormGroup;
  isLoading = false;
  user$:Observable<any> | undefined
  userError$:Observable<any> | undefined
  constructor() {
    super();
    this.form = this.fb.group({
      subject : ['' , Validators.required , Validators.minLength(3)],
      message : ['' , Validators.required , Validators.minLength(3)]
    })
  }
  ngOnInit() : void{
    initFlowbite();
  } 


  onSubmit() {
    this.isLoading = true;
    this.service.saveRequest(this.form.value).pipe(takeUntil(this.unsubscribe$)).subscribe(
      {
        next: (reponse: any) => {
          this.isLoading = false
          console.log(reponse);
        //  this.router.navigate(['/commandes'])
        },
        error: (error:any) => {
          console.log(error);
          this.userError$ = of(error?.error?.detail || 'Une erreur est survenue');
          this.isLoading = false
        },
      }
      )  
    }


    get subject() {
      return this.form.get('type');
    }
    get message() {
      return this.form.get('body');
    }
}
