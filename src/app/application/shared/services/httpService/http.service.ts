import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment, Environment } from "src/environments/environment.staging";


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) {}
  
  apiHost = environment.host;

  getItems(url: string, params = {}, apihost: string = this.apiHost): Observable<any>{
    return this.http.get<any>(`${apihost + url}`, {params: params});
  }

  delete(url: string) {
    return this.http.delete<any>(`${this.apiHost  + url}`);
  }

  post(url: string, item: any): Observable<any>{
    return this.http.post<any>(`${this.apiHost  + url}`, item);
  }

  put(url: string, item: any): Observable<any>{
    return this.http.put<any>(`${this.apiHost  + url}`, item);
  }

  patch(url: string, params = {}): Observable<any>{
    return this.http.patch<any>(`${this.apiHost  + url}`,   params);
  }
}
