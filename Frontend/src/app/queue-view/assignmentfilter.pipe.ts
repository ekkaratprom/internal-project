import { Assignment } from './assignment-list/shared/assignment-model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'assignmentFilter' })
export class AssignmentPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();


    return items.filter((it) => {
      if (it.assignmentName === null) {
        return false;
      }
      console.log(it.assignmentName.toLocaleLowerCase().includes(searchText));
      return it.assignmentName.toLocaleLowerCase().includes(searchText);

    });
  }
}
