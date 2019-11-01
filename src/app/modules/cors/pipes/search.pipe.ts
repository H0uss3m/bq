import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], key :string, searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    if(!key) return items;
    return items.filter(item => item[key].toLowerCase().includes(searchText.toLowerCase()));
  }
}
