import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HojasDeVidaModalComponent } from 'src/app/modals/hojas-de-vida-modal/hojas-de-vida-modal.component';
import { Job } from 'src/app/models/job';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-ofertas-laborales',
  templateUrl: './ofertas-laborales.component.html',
  styleUrls: ['./ofertas-laborales.component.css']
})
export class OfertasLaboralesComponent implements OnInit {

  jobs: Job[];
  modalRef: MdbModalRef<HojasDeVidaModalComponent>;

  constructor(private modalService: MdbModalService, protected jobService: JobsService) {} openModal(job: Job) {
    this.modalRef = this.modalService.open(HojasDeVidaModalComponent, { data: { job }
    });
  }

  ngOnInit(): void {
    this.jobService.getJobs()
    .subscribe(
      (jobs) => {
        this.jobs = jobs;
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
