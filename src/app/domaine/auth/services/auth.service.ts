import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/application/shared/services/httpService/http.service';
import { IUserLoginOTP } from 'src/app/application/shared/models/IUserLoginOTP';
import { IUserLoginConfirmation } from 'src/app/application/shared/models/IUserLoginConfirmation';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) { }
  username: string = ''
  phoneNumber: string = ''

  login(user: IUserLoginOTP) {
    const url = `otp/login`;
    this.username=user.username;
    return this.httpService.post(url, user)
  }

  completeLogin(user : IUserLoginConfirmation){
    const url = `otp/validation`;
    this.phoneNumber=user.phoneNumber;
    return this.httpService.post(url, user)
  }

  agreementsValidation(data : {accepted ?: boolean, username ?: string | undefined}){
    const url = `agreements/validation`;
    data.username=this.username
    return this.httpService.post(url,data)
  }
 

  async getCgu(){
    const url = `condition/cgu`;
    try {
      return await lastValueFrom(
        this.httpService.getItems(url)
      )
    } catch (err) {
      console.log(err)
      return err;
    }
  }
}
