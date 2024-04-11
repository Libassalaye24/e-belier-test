import { Injectable , inject } from '@angular/core';
import { HttpService } from 'src/app/application/shared/services/httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  httpService = inject(HttpService)
  constructor() { }
  getClaims() {
    const url = `assistance/claims`
    return this.httpService.getItems(url);
  }

  saveClaim(data : any) {
    return this.httpService.post("assistance/claims" , data)
  }

}
