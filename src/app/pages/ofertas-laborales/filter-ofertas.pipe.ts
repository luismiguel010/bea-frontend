import { Job } from './../../models/job';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOfertas'
})
export class FilterOfertasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultJobs: Job[] = [];
    for (const jobs of value) {
      if (jobs.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || jobs.description.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        jobs.dateInit.toLowerCase().indexOf(arg.toLowerCase()) > -1 || jobs.dateFinish.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        jobs.salary.toLowerCase().indexOf(arg.toLowerCase()) > -1 || jobs.address.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        jobs.company.toLowerCase().indexOf(arg.toLowerCase()) > -1 || jobs.category.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultJobs.push(jobs);
      };
    };
    return resultJobs;
  }

}
