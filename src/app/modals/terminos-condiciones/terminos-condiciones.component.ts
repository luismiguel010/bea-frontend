import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.css']
})
export class TerminosCondicionesComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<TerminosCondicionesComponent>) { }

  ngOnInit(): void {
  }

  close(): void {
    this.modalRef.close()
  }

}
