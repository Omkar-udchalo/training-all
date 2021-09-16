import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarer',
})
export class Square implements PipeTransform {
  transform(value: number): number {
    let sq = value;
    return sq * sq;
  }
}
