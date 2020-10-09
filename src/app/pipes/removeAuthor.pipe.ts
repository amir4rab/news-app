import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeAuthor'
})
export class RemoveAuthor implements PipeTransform{
  transform(value: string): string{
    if (value.indexOf(' - ')){
      return value.slice(0, value.indexOf(' - '));
    }
    return value;
  }
}
