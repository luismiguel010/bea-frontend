import swal from 'sweetalert2';
import { CapacitacionesService } from './../../services/capacitaciones.service';
import { Capacitacion } from './../../models/Capacitacion';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.css']
})
export class CapacitacionesComponent implements OnInit {
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
