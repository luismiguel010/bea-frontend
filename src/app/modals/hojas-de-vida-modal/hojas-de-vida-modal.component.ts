import { UserService } from './../../services/user.service';
import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';
import { User } from './user';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-hojas-de-vida-modal',
  templateUrl: './hojas-de-vida-modal.component.html',
  styleUrls: ['./hojas-de-vida-modal.component.css']
})
export class HojasDeVidaModalComponent implements OnInit {
  title: string;

  public user: User = new User()

  constructor(public modalRef: MdbModalRef<HojasDeVidaModalComponent>,
     private router: Router, private userService: UserService) {
    
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
    this.userService.save_user(this.user)
    .subscribe(responde => {
      //this.router.navigate(['/users'])
      swal.fire('Hoja de vida registrada', 'Hoja de vida registrada con éxito', 'success')
      this.ngOnInit();
      },err => {
        if(err.status == 500){
          swal.fire('Error al registrar hoja de vida', 'Es posible que la cédula ya exista', 'error')
        }
      }
    )

  }

  ngOnInit(): void {
  }

}
