import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: boolean): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        // searchText = searchText.toLocaleLowerCase();

        return items.filter((it) => {
            return it.completeStatusCheck.toLocaleLowerCase().includes(searchText);
        });
    }
}