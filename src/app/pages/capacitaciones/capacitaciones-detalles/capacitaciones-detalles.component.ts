import swal from 'sweetalert2';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Capacitacion } from 'src/app/models/Capacitacion';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';

@Component({
  selector: 'app-capacitaciones-detalles',
  templateUrl: './capacitaciones-detalles.component.html',
  styleUrls: ['./capacitaciones-detalles.component.css']
})
export class CapacitacionesDetallesComponent implements OnInit {

  @Input() idCapacitacion: string;
  capacitacion: Capacitacion;

  constructor(private route: ActivatedRoute, protected capacitacionService: CapacitacionesService) { }

  ngOnInit(): void {
    let idCapacitacion = this.route.snapshot.paramMap.get('idCapacitacion')!;
    this.capacitacionService.getCapacitacionById(idCapacitacion)
      .subscribe(
        (capacitacion) => {
          this.capacitacion = capacitacion
        },
        (error) => {
          swal.fire('Error interno en el servidor', 'Comuníquese con nosotros para informar el problema', 'error')
        }
      )
  }

  setFechaVencimientoInscripciones(date: Date): Date {
    let dateSet = new Date(date)
    dateSet.setDate(dateSet.getDate() - 1)
    return dateSet
  }

}
