import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cammelcase',
})
export class CammelCase implements PipeTransform {
  transform(data: string): string {
    let sent = data.split(' ');
    let res = '';
    for (let item of sent) {
      item = item[0].toUpperCase() + item.slice(1);
      // console.log(item);
      res += item + ' ';
    }
    // console.log(res);

    return res;
  }
}
