import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mbtogb',
})
export class MbToGb implements PipeTransform {
  transform(value: number): number {
    const mb = 1024;
    if (!isNaN(value)) {
      return value / mb;
    }
  }
}
