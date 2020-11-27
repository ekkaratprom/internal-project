import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(index: number): any {

    if (index === 0) {
      return { bg: '#CEC3BA', fc: '#521419' };
    }
    if ((0 < index) && (index <= 5)) {
      return { bg: '#77B786', fc: '#112F18' };
    }
    if ((5 < index) && (index < 8)) {
      return { bg: '#F5DE97', fc: '#3F320C' };
    }
    if (index === 8) {
      return { bg: '#ECB3B8', fc: '#521419' };
    }
    if (index > 8) {
      return { bg: '#CA1425', fc: '#42181B' };
    }

  }

}
