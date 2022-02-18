import { Job } from 'src/app/models/job';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-ofertas-laborales-detalles',
  templateUrl: './ofertas-laborales-detalles.component.html',
  styleUrls: ['./ofertas-laborales-detalles.component.css']
})
export class OfertasLaboralesDetallesComponent implements OnInit {
  @Input() idJob: string;
  job: Job;

  constructor(private route: ActivatedRoute, protected jobService: JobsService) { }

  ngOnInit(): void {
    let idJob = this.route.snapshot.paramMap.get('idJob')!;
    this.jobService.getJobById(idJob)
      .subscribe(
        (job) => {
          this.job = job
        },
        (error) => {
          console.error(error);
        }
      )
  }

}
