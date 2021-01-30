import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuPipe'
})
export class MeuPipePipe implements PipeTransform {

  transform(value: number, exponent: number, vezes: number): number {
    return Math.pow(value, exponent) * vezes;
  }

}
