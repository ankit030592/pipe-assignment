import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propType: string) {
    value.sort((a, b) => {
      console.log(a);
      console.log(b);
      let propA = a[propType];
      let propB = b[propType];

      if(propA > propB) return -1;
      if(propB > propA) return 1;
      return 0;
    });

    return value;
  }

}
