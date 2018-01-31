import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberIterator'
})
export class NumberIteratorPipe implements PipeTransform {

  transform(value: any, args: string[]): any {
    let result = [];
    for(let i =0; i< value; i++){
      result.push(i);
    }
    return result;
  }

}
