import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'positionFilter' })
export class PositionPipe implements PipeTransform {
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
        return items;
      }

      return it.position.toLocaleLowerCase().includes(searchText);

    });
  }
}
