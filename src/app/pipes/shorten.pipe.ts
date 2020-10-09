import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'shorten'
})
export class ShotenPipe implements PipeTransform {
  transform(value: string): string{
    if (value.length > 73){
      return value.substr(0, 70) + '...';
    }
    return value;
  }
}
