import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorcompletedStatusPipe'
})
export class ColorCompletedStatusPipe implements PipeTransform {

  transform(index: boolean): any {

    if (index === true) {
      return '#81F295';
    }
    if (index === false) {
      return '#BBAFAF';
    }

  }

}
