import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStatus: string, status: string): any {

    if (value.length == 0 || filterStatus == "") {
      return value;
    }
    let resultArray = [];
    for (let todo of value) {
      if (todo[status] == filterStatus) {
        resultArray.push(todo);
      }
    }
    return resultArray;
  }

}
