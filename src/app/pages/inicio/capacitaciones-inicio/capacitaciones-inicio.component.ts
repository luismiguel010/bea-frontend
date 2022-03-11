import swal from 'sweetalert2';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Capacitacion } from 'src/app/models/Capacitacion';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';

@Component({
  selector: 'app-capacitaciones-inicio',
  templateUrl: './capacitaciones-inicio.component.html',
  styleUrls: ['./capacitaciones-inicio.component.css']
})
export class CapacitacionesInicioComponent implements OnInit {

  capacitaciones: Capacitacion[];
  filterCapacitacion = '';
  @Output() buttonClicked = new EventEmitter();

  constructor(private capacitacionesService: CapacitacionesService) { }

  ngOnInit(): void {
    this.capacitacionesService.getCapacitaciones()
      .subscribe(
        (capacitaciones) => {
          this.capacitaciones = capacitaciones;
          this.capacitaciones.sort((a, b) => {
            return new Date(b.dateInit).getTime() - new Date(a.dateInit).getTime()
          });
        },
        (error) => {
          swal.fire('Error interno en el servidor', 'Comuníquese con nosotros para informar el problema', 'error')
        }
      )
  }

  setFechaVencimientoInscripciones(date: Date): Date {
    let dateSet = new Date(date)
    date.setDate(date.getDate() - 1)
    return dateSet
  }

}
