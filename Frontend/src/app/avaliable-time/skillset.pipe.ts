import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'skillFilter' })
export class SkillPipe implements PipeTransform {
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

      return it.skills.skillName.toLocaleLowerCase().includes(searchText);
      console.log(it);
    });
  }
}
