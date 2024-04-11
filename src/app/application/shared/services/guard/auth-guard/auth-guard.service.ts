import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.auth.logout()
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
