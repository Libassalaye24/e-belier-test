import { Component, Input, OnInit } from '@angular/core';
import { ELogin } from 'src/app/application/shared/models/ELogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  phoneNumber: string | undefined;
  username: string | undefined;
  showComponent = false;
  component = ELogin.OTPLogin
  showCgu : boolean = false
 // phoneNumber: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

  toggleComponent(component: any): void {
    this.component = component?.state;
    this.phoneNumber = component?.phoneNumber
    this.username = component?.username
    this.showCgu = component?.showCgu 
    console.log(component)

  }

}
