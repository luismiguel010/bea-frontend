import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataImagesService } from 'src/app/services/data-images.service';
import { Result } from './result';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InicioComponent implements OnInit {

  sliderArray: any[];
  transform: number;
  selectedIndex = 0;

  constructor(private dataImageService: DataImagesService) {
    this.sliderArray = [
      { img: '../../assets/inicio1.jpg', alt: '', text: 'Da a conocer tus habilidades en las Ofertas laborales que tenemos.' },
      { img: '../../assets/inicio2.jpg', alt: '', text: 'Envíanos tu hoja de vida en la sección Hojas de vida si no encuentras tu oferta laboral.' },
      { img: '../../assets/inicio3.jpg', alt: '', text: 'Te ayudamos a conseguir el trabajo soñado y el trabajo que mereces.' },
      { img: '../../assets/inicio4.jpg', alt: '', text: 'No esperes que las oportunidades lleguen solas. Tienes que hacer que ocurra.' },
      { img: '../../assets/inicio5.jpg', alt: '', text: 'Tu gran oportunidad puede ser justo donde te encuentras ahora.' }

    ];
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {

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
