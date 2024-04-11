import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { takeUntil } from 'rxjs';
import { AuthService } from 'src/app/application/shared/services/auth/auth.service';
import { Unsub } from 'src/app/application/shared/utils/unsub.class';

@Component({
  selector: 'app-card-infos',
  templateUrl: './card-infos.component.html',
  styleUrls: ['./card-infos.component.scss']
})
export class CardInfosComponent extends Unsub implements OnInit {

  ngOnInit(): void {
    this.getUserConnected()
  }

  constructor(
      private authService: AuthService
    ) {
    super();
  } 

  getUserConnected(){
    return this.authService.getUser().pipe(takeUntil(this.unsubscribe$))
  }
}
