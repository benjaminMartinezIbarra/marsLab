import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateIso'
})
export class DateIsoPipe implements PipeTransform {

  transform(dateIso: string): string {
    const [a, m, d] = dateIso.split('-');
    return d + '/' + m + '/' + a;
  }

}
