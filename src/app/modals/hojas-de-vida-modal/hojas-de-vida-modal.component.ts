import { CvService } from './../../services/cv.service';
import { JobCv } from './../../models/jobcv';
import { UserService } from './../../services/user.service';
import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';
import { User } from '../../models/user';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { Cv } from '../../models/cv';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-hojas-de-vida-modal',
  templateUrl: './hojas-de-vida-modal.component.html',
  styleUrls: ['./hojas-de-vida-modal.component.css']
})
export class HojasDeVidaModalComponent implements OnInit {
  job: Job;

  public user: User = new User()
  public cv: Cv = new Cv()
  public jobcv: JobCv = new JobCv()
  jobcvlist: JobCv[]
  file: File;

  constructor(public modalRef: MdbModalRef<HojasDeVidaModalComponent>,
     private router: Router, private userService: UserService, private cvService: CvService) {
    
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }

  public send(): void {
    if(this.user.identificationCard == null){
      swal.fire('Error al enviar hoja de vida', 'Campo de cédula vacío', 'error')
      return;
    }
    if(this.user.names == null){
      swal.fire('Error al enviar hoja de vida', 'Campo de nombres vacío', 'error')
      return;
    }
    if(this.user.lastnames == null){
      swal.fire('Error al enviar hoja de vida', 'Campo de apellidos vacío', 'error')
      return;
    }
    if(this.user.phone == null){
      swal.fire('Error al enviar hoja de vida', 'Campo de celular vacío', 'error')
      return;
    }
    if(this.user.address == null){
      swal.fire('Error al enviar hoja de vida', 'Campo de dirección vacío', 'error')
      return;
    }
    if(this.user.email == null){
      swal.fire('Error al enviar hoja de vida', 'Campo de correo electrónico vacío', 'error')
      return;
    }
    if(this.user.academicProfile == null){
      swal.fire('Error al enviar hoja de vida', 'Campo de nivel académico vacío', 'error')
      return;
    }
    this.user.idUser = uuidv4();
    this.cv.idCv = uuidv4();
    this.cv.idUser = this.user.idUser;
    this.cv.directoryFile = this.job.name;
    this.cv.dateReceived = new Date;
    this.jobcv.idCv = this.cv.idCv;
    this.jobcv.idJob = this.job.idJob;
    this.jobcvlist.push(this.jobcv);
    this.cv.jobCvList = this.jobcvlist;
    this.userService.save_user(this.user)
    .subscribe(responde => {
      //this.router.navigate(['/users'])
      swal.fire('Usuario registrado', 'Usuario registrado con éxito', 'success')
      this.ngOnInit();
      },err => {
        if(err.status == 500){
          swal.fire('Error al registrar usuario', 'Es posible que la cédula ya exista', 'error')
        }
      }
    );
    this.cvService.save_cv(this.cv, this.file)
    .subscribe(responde => {
      swal.fire('Hoja de vida cargada', 'Hoja de vida cargada con éxito', 'success')
      this.ngOnInit();
    }, err => {
        if(err.status == 500){
          swal.fire('Error al carga hoja de vida', 'Es posible que la hoja de vida ya exista', 'error')
        }
    });

  }

  ngOnInit(): void {
  }

}
