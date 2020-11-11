import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'DeleteStatusFilter' })
export class DeleteStatusPipe implements PipeTransform {
  transform(items: any[], deletedStatus: boolean): any[] {
    if (!items) {
      return [];
    }
    if (deletedStatus === undefined) {
      return items;
    }

    return items.filter((it) => {
      return it.deletedStatus === false;
    });
  }
}


