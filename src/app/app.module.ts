import { JobsService } from './services/jobs.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OfertasLaboralesComponent } from './pages/ofertas-laborales/ofertas-laborales.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HojasDeVidaModalComponent } from './modals/hojas-de-vida-modal/hojas-de-vida-modal.component';
import { InformacionInstitucionalComponent } from './pages/informacion-institucional/informacion-institucional.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: InicioComponent },
  { path: 'ofertas', component: OfertasLaboralesComponent },
  { path: 'informacion', component: InformacionInstitucionalComponent },
  { path: 'contactenos', component: ContactenosComponent },
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
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MdbModalModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
