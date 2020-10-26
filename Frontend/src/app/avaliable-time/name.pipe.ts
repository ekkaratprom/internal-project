import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nameFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      return it.fullName.toLocaleLowerCase().includes(searchText);
    });
  }
}
