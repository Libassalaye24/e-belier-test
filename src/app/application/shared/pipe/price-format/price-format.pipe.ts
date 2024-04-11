import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  constructor() {
  }
  transform(value: any): any {
    return new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(
      value,
    );

  }

}
