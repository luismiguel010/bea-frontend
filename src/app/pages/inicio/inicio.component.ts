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
      { img: '../../assets/inicio1.jpg', alt: '', text: 'Da a conocer tus habilidades' },
      { img: '../../assets/inicio2.jpg', alt: '', text: 'Envíanos tu hoja de vida' },
      { img: '../../assets/inicio3.jpg', alt: '', text: 'Te ayudamos a conseguir' },
      { img: '../../assets/inicio4.jpg', alt: '', text: 'El trabajo soñado' },
      { img: '../../assets/inicio5.jpg', alt: '', text: 'Y el trabajo que mereces' }

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
