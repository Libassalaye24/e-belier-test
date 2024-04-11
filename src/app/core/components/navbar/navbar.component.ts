import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { takeUntil } from 'rxjs';
import { AuthService } from 'src/app/application/shared/services/auth/auth.service';
import { Unsub } from 'src/app/application/shared/utils/unsub.class';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends Unsub implements OnInit {

  ngOnInit(): void {
    initFlowbite();
    this.getUserConnected()
  }

  constructor(
      private authService: AuthService
    ) {
    super();
  }

  logout(){
    this.authService.logout();
  }

  getUserConnected(){
    return this.authService.getUser().pipe(takeUntil(this.unsubscribe$))
    
  }
}
