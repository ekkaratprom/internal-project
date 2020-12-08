import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'projectFilter' })
export class ProjectPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();


        return items.filter((it) => {
            if (it.projectName === null) {
                return false;
            }

            return it.projectName.toLocaleLowerCase().includes(searchText);

        });
    }
}