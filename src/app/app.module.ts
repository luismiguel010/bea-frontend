import { JobsService } from './services/jobs.service';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderModule } from 'angular-image-slider';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OfertasLaboralesComponent } from './pages/ofertas-laborales/ofertas-laborales.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HojasDeVidaModalComponent } from './modals/hojas-de-vida-modal/hojas-de-vida-modal.component';
import { InformacionInstitucionalComponent } from './pages/informacion-institucional/informacion-institucional.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { HojaDeVidaComponent } from './pages/hoja-de-vida/hoja-de-vida.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: InicioComponent },
  { path: 'ofertas', component: OfertasLaboralesComponent },
  { path: 'informacion', component: InformacionInstitucionalComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'hojadevida', component: HojaDeVidaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OfertasLaboralesComponent,
    InicioComponent,
    HojasDeVidaModalComponent,
    InformacionInstitucionalComponent,
    ContactenosComponent,
    HojaDeVidaComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MdbModalModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    SliderModule
  ],
  entryComponents: [InicioComponent],
  exports: [RouterModule],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const slider = createCustomElement(InicioComponent, { injector });
    customElements.define('motley-slider', slider);
  }

  ngDoBootstrap() { }
}
