import swal from 'sweetalert2';
import { AliadoService } from './../../../services/aliado.service';
import { Aliado } from './../../../models/aliado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aliados',
  templateUrl: './aliados.component.html',
  styleUrls: ['./aliados.component.css']
})
export class AliadosComponent implements OnInit {

  aliados: Aliado[];

  constructor(private aliadoService: AliadoService) { }

  ngOnInit(): void {
    this.aliadoService.getAllAliado()
      .subscribe(
        (aliados) => {
          this.aliados = aliados
        },
        (error) => {
          swal.fire('Error interno en el servidor para obtener Aliados', 'Comuníquese con nosotros para informar el problema', 'error')
        }
      )
  }

}
