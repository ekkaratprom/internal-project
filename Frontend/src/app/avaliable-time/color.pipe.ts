import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(index: number): any {

    if (index === 0) {
      return '#CEC3BA';
    }
    if ((1 <= index) && (index <= 5)) {
      return '#CAE71E';
    }
    if ((6 <= index) && (index <= 7)) {
      return '#E77E1E';
    }
    if (index === 8) {
      return '#FF3333';
    }
    if (index > 8) {
      return '#FF0000';
    }

  }

}
