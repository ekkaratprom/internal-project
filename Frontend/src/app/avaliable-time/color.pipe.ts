import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(index: number): any {

    if (index === 0) {
      return '#E0E7E2';
    }
    if ((1 <= index) && (index <= 5)) {
      return '#43F576';
    }
    if ((6 <= index) && (index <= 7)) {
      return '#F15D2E';
    }
    if (index === 8) {
      return '#CC3C0F';
    }

  }

}
