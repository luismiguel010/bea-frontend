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
      { img: '../../assets/inicio1.jpg', alt: '', text: 'Consigue ese empleo.' },
      { img: '../../assets/inicio2.jpg', alt: '', text: 'Da a conocer tus habilidades y capacidades.' },
      { img: '../../assets/inicio3.jpg', alt: '', text: 'Si aún no encuentras una oferta laboral que se acomodé, puedes igual enviarnos tus datos en la sección Hojas de vida.' }

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
