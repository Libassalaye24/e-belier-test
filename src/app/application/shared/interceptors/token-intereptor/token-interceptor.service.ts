import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { HttpCashService } from '../../services/httpCash/http-cash.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  _httpCashService=inject(HttpCashService) 
  authService=inject(AuthService) 
  // intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
  //   const token = localStorage.getItem('token');

  //   if (token && token !== '') {
  //     const headers = new HttpHeaders({
  //       'Authorization': `Bearer ${token}`
  //     });
  
  //     httpRequest = httpRequest.clone({headers});
  //   }

    

  //   return next.handle(httpRequest);
  // }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cacheEntry = this._httpCashService.getCacheEntry(httpRequest.urlWithParams);

    if (!this.authService.isAuthenticated()) {
      return next.handle(httpRequest).pipe(
        catchError((error: any) => {
          if (error.status === 401 && !httpRequest.url.includes('/login')) {
            localStorage.clear();
            window.location.href = '/'
          }

          return throwError(error);
        })
      )
    }
    if (cacheEntry) {
      return cacheEntry instanceof Observable ? cacheEntry : of(cacheEntry.clone());
    }

    const token = localStorage.getItem('token');

    if (token && token !== '') {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
       // 'Content-Type': 'application/json'
      });
  
      httpRequest = httpRequest.clone({headers});
    }
    // if (httpRequest.method === 'GET' && !httpRequest.url.includes('/bo/payers') && !this._httpCashService.existsCachingUrl(httpRequest.url)) {
    //   if (!this._httpCashService.existsCachingUrl(httpRequest.url)) {
    //     this._httpCashService.addCachingUrl(httpRequest.url);
    //   }
    //   return this.requestHandler(httpRequest, next);
    // }

    return next.handle(httpRequest);
  }

  private requestHandler(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (this._httpCashService.existsCachingUrl(request.url)) {
            this._httpCashService.setCacheEntry(request.urlWithParams, event);
          }
        }
      })
    );
  }
}
