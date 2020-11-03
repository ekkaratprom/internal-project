import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(index: number): any {

    if (index === 0) {
      return '#CEC3BA';
    }
    if ((0 < index) && (index <= 5)) {
      return '#DAF7A6';
    }
    if ((5 < index) && (index < 8)) {
      return '#FFC300';
    }
    if (index === 8) {
      return '#FF5733';
    }
    if (index > 8) {
      return '#C70039';
    }

  }

}
