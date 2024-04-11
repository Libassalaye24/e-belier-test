import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-info-bank',
  templateUrl: './info-bank.component.html',
  styleUrls: ['./info-bank.component.scss']
})
export class InfoBankComponent {

  @Input({required: true}) image : string="";
  @Input({required: true}) rib : string="";

}
