import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { delay, Observable, of, Subscription } from 'rxjs';
import { HttpService } from '../httpService/http.service';
import { IUserLoged } from '../../models/IUserLoged';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenSubscription = new Subscription();
  constructor(
    public jwtHelper: JwtHelperService,
    private httpService: HttpService,
    private router: Router
  ) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getlogedUser(): any {
    const token = localStorage.getItem('token');
    return this.jwtHelper.decodeToken(token!)
  }

  getUser() : Observable<IUserLoged | null> {
    const token = localStorage.getItem('token');
    return of(this.jwtHelper.decodeToken(token!));
  }

  subscribeExpiration() {
    const user = this.getlogedUser();
    this.tokenSubscription.unsubscribe();
    this.tokenSubscription = of(null).pipe(delay(user.exp)).subscribe((expired) => {
      this.logout();
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
