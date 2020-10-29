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

    return items.filter(item => item.skills.filter(skill => skill.skillName.toLocaleLowerCase() === searchText).length > 0);
  }
}
