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
      return '#77B786';
    }
    if ((5 < index) && (index < 8)) {
      return '#F5DE97';
    }
    if (index === 8) {
      return '#EEC0C5';
    }
    if (index > 8) {
      return '#CA1425';
    }

  }

}
