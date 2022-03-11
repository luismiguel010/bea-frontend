import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Capacitacion } from 'src/app/models/Capacitacion';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';
import { DataImagesService } from 'src/app/services/data-images.service';
import { Result } from './result';
import swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InicioComponent implements OnInit {
  capacitaciones: Capacitacion[];
  sliderArray: any[];
  transform: number;
  selectedIndex = 0;

  constructor(private dataImageService: DataImagesService, private capacitacionesService: CapacitacionesService) {
    this.sliderArray = [
      //{ img: '../../assets/inicio1.jpg', alt: '', text: 'Da a conocer tus habilidades en las Ofertas laborales que tenemos.' },
      { img: '../../assets/inicio2.jpg', alt: '', text: 'Te ayudamos a conseguir el trabajo soñado y el trabajo que mereces.' },
      { img: '../../assets/inicio1.jpg', alt: '', text: 'Envíanos tu hoja de vida en la sección Hojas de vida si no encuentras tu oferta laboral.' },
      { img: '../../assets/inicio4.jpg', alt: '', text: 'No esperes que las oportunidades lleguen solas. Tienes que hacer que ocurra.' },
      { img: '../../assets/inicio5.jpg', alt: '', text: 'Dale un vistazo también, a nuestras capacitaciones que tenemos disponibles.' }

    ];
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {
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

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  downSelected(i) {
    this.transform = 100 - (i) * 50;
    this.selectedIndex = this.selectedIndex + 1;
    if (this.selectedIndex > 4) {
      this.selectedIndex = 0;
    }
  }


}
