import { Assignment } from './../assignment-list/shared/assignment-model';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'completedstatusFilter' })
export class CompleteStatusPipe implements PipeTransform {
  transform(items: any[], completedStatusCheck: boolean): any[] {
    if (!items) {
      return [];
    }
    if (completedStatusCheck === undefined) {
      return items;
    }
    return items.filter((it) => {
      return it.completedStatus === completedStatusCheck;
    });
  }
}
