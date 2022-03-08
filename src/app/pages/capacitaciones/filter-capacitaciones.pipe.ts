import { Capacitacion } from './../../models/Capacitacion';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCapacitaciones'
})
export class FilterCapacitacionesPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultCapacitaciones: Capacitacion[] = [];
    for (const capacitaciones of value) {
      if (capacitaciones.name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultCapacitaciones.push(capacitaciones);
      };
    };
    return resultCapacitaciones;
  }

}
