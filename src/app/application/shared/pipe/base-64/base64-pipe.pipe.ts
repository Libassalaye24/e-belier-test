import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64Pipe'
})
export class Base64PipePipe implements PipeTransform {

  constructor() {}

  transform(value: any, contentType: string): any {
    var base64Content = `data:${contentType};base64,${value}`;
    return base64Content;
  }

}
