import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'longnameFilter' })
export class LongNamePipe implements PipeTransform {
    transform(items: string, namelength: number): string {
        if (!items) {
            return '';
        }


        if (items.length > namelength) {
            items = items.slice(0, namelength) + '...';
            return items;
        }
        else { return items; }

    }
}
