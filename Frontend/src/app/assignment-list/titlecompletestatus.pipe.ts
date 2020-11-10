import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecompletedStatusPipe'
})
export class TitleCompletedStatusPipe implements PipeTransform {

  transform(index: boolean): any {

    if (index === true) {
      return 'Complete';
    }
    if (index === false) {
      return 'Incomplete';
    }

  }

}
