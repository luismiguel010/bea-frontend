import { DownloadFormatoService } from './../../services/download-formato.service';
import { CvService } from './../../services/cv.service';
import { JobCv } from './../../models/jobcv';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { Cv } from '../../models/cv';
import { Job } from 'src/app/models/job';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { NivelAcademico } from '../../enums/nivel-academico';

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
  jobcvlist: JobCv[] = new Array()
  progress: number = 0;
  selectedFiles?: FileList;
  file?: File;

  constructor(public modalRef: MdbModalRef<HojasDeVidaModalComponent>, private userService: UserService, private cvService: CvService, private downloadFormatoService: DownloadFormatoService) {

  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  close(): void {
    this.modalRef.close()
  }

  downloadFormato(): void {
    this.downloadFormatoService.download().subscribe(
      (blob) => {
        saveAs(blob, "Formato Hoja de Vida.xlsx")
      },
      (error) => {
        swal.fire('Error descargando el formato de hoja de vida', 'Consulto al administrador', 'error')
      }
    )
  }

  refresh(): void {
    window.location.reload();
  }

  getNivelAcademicoValue(number: number): any {
    return NivelAcademico[number - 1];
  }

  public send(): void {
    if (this.user.identificationCard == null) {
      swal.fire('Error al enviar hoja de vida', 'Campo de cédula vacío', 'error')
      return;
    }
    if (this.user.names == null) {
      swal.fire('Error al enviar hoja de vida', 'Campo de nombres vacío', 'error')
      return;
    }
    if (this.user.lastnames == null) {
      swal.fire('Error al enviar hoja de vida', 'Campo de apellidos vacío', 'error')
      return;
    }
    if (this.user.phone == null) {
      swal.fire('Error al enviar hoja de vida', 'Campo de celular vacío', 'error')
      return;
    }
    if (this.user.address == null) {
      swal.fire('Error al enviar hoja de vida', 'Campo de dirección vacío', 'error')
      return;
    }
    if (this.user.email == null) {
      swal.fire('Error al enviar hoja de vida', 'Campo de correo electrónico vacío', 'error')
      return;
    }
    if (this.user.academicProfile == null) {
      swal.fire('Error al enviar hoja de vida', 'Campo de nivel académico vacío', 'error')
      return;
    }
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.user.idUser = uuidv4();
        this.user.academicProfile = this.getNivelAcademicoValue(Number(this.user.academicProfile));
        this.userService.save_user(this.user)
          .subscribe(response => {
            // Obtener ID Usuario
            //CV
            this.cv.idCv = uuidv4();
            this.cv.idUser = response.idUser;
            console.log(this.cv.idUser);
            this.cv.directoryFile = this.job.name;
            this.cv.dateReceived = new Date;
            this.jobcv.idCv = this.cv.idCv;
            this.jobcv.idJob = this.job.idJob;
            this.jobcvlist.push(this.jobcv);
            this.cv.jobCvList = this.jobcvlist;
            console.log(this.user)
            console.log(this.cv)

            this.file = file;
            this.cvService.save_cv(this.cv, file)
              .subscribe((event: HttpEvent<any>) => {
                switch (event.type) {
                  case HttpEventType.Sent:
                    console.log('Request has been made!');
                    break;
                  case HttpEventType.ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                  case HttpEventType.UploadProgress:
                    console.log(event.total)
                    this.progress = Math.round(event.loaded / event.total! * 100);
                    console.log(`Uploaded! ${this.progress}%`);
                    break;
                  case HttpEventType.Response:
                    console.log('User successfully created!', event.body);
                    swal.fire('Usuario registrado', 'Usuario registrado con éxito', 'success')
                    setTimeout(() => {
                      this.progress = 0;
                    }, 1500);
                }
              }, err => {
                if (err.status == 500) {
                  swal.fire('Error al cargar hoja de vida', 'Consulte al administrador', 'error')
                }
              });
            this.ngOnInit();
          }, err => {
            if (err.status == 500) {
              swal.fire('Error al registrar hoja de vida', 'Es posible que la cédula ya exista', 'error')
            }
            if (err.status == 400) {
              swal.fire('Error al cargar hoja de vida', 'Hay campos que ya son existentes', 'error')
            }
          }
          );
      } else {
        swal.fire('Error al registrar hoja de vida', 'No ha cargado el formulario de hoja de vida', 'error');
        this.file = undefined;
      }
    } else {
      swal.fire('Error al registrar hoja de vida', 'No ha cargado el formulario de hoja de vida', 'error');
      this.selectedFiles = undefined;
    }
  }

  ngOnInit(): void {
  }

}


