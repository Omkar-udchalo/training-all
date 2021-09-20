import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './model';

@Pipe({
  name: 'formatter',
})
export class ChainPipe implements PipeTransform {
  transform(value: Person): string {
    return value.name;
  }
}
