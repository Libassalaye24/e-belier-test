import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comaToSpace'
})
export class ComaToSpacePipe implements PipeTransform {

  transform(value: string | null): string {
    if (value) {
      return value.replace(/,/gi, ' ')+ ' FCFA';
    }

    return '';
  }

}
