import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe  implements PipeTransform {
  transform(array: any[], field: string, type: string): any[] {
    if(array && field) {
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    if(type=='asc') {
      return array;
    }
    else {
      return array.slice().reverse();
    }
  }
}
}
