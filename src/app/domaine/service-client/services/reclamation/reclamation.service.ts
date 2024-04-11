import { Injectable , inject } from '@angular/core';
import { HttpService } from 'src/app/application/shared/services/httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  httpService = inject(HttpService)
  constructor() { }
  getRequests() {
    const url = `assistance/requests`
    return this.httpService.getItems(url);
  }

  saveRequest(data : any) {
    return this.httpService.post("assistance/requests" , data)
  }
}
