import { Component } from '@angular/core';
import { IBankItem } from "src/app/application/shared/models/IBankItem";

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.scss']
})
export class InfoGeneralComponent {


  bankItems: IBankItem[] = [
    { image: '../../../../assets/images/banque/nsia.png', rib: 'CI0420121202673890200179' },
    { image: '../../../../assets/images/banque/imagecheval.png', rib: 'CI0340100101142201391474' },
    { image: '../../../../assets/images/banque/cbao.png', rib: 'CI0070103002605070010026' },
    { image: '../../../../assets/images/banque/sgbci.png', rib: 'CI0080111101116245356003' },
    { image: '../../../../assets/images/banque/mtn.png', rib: '05551370904' },
    { image: '../../../../assets/images/banque/ecobank.png', rib: 'CI0590100112120054500170' },
    { image: '../../../../assets/images/banque/bicic.png', rib: 'CI0060156101030540000741' },


    // ... autres éléments du tableau
  ];
  
}
