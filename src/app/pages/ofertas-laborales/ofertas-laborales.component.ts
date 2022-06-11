import swal from 'sweetalert2';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HojasDeVidaModalComponent } from 'src/app/modals/hojas-de-vida-modal/hojas-de-vida-modal.component';
import { TerminosCondicionesComponent } from 'src/app/modals/terminos-condiciones/terminos-condiciones.component';
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
  modalRefTerminos: MdbModalRef<TerminosCondicionesComponent>;
  filterJob = '';
  idJobOtro = '68cdcc29-09ea-4ac4-9f04-737a9b7a0ca6';
  @Output() buttonClicked = new EventEmitter();

  constructor(private modalService: MdbModalService, protected jobService: JobsService) {

  }

  openModalTerminos() {
    this.modalRefTerminos = this.modalService.open(TerminosCondicionesComponent, {});
  }

  openModal(job: Job) {
    this.modalRef = this.modalService.open(HojasDeVidaModalComponent, {
      data: { job }
    });
  }

  ngOnInit(): void {
    this.jobService.getJobs()
      .subscribe(
        (jobs) => {
          this.jobs = jobs;
          this.jobs.sort((a, b) => {
            return new Date(b.dateInit).getTime() - new Date(a.dateInit).getTime()
          });
          this.jobs = this.jobs.filter(obj => obj.state && obj.idJob !== this.idJobOtro);
        },
        (error) => {
          swal.fire('Error interno en el servidor', 'Comuníquese con nosotros para informar el problema', 'error')
        }
      )
  }

}
