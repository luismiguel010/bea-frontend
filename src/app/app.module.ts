import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OfertasLaboralesComponent } from './pages/ofertas-laborales/ofertas-laborales.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HojasDeVidaComponent } from './pages/hojas-de-vida/hojas-de-vida.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: InicioComponent},
  {path: 'ofertas', component: OfertasLaboralesComponent},
  {path: 'hojas_de_vida', component: HojasDeVidaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OfertasLaboralesComponent,
    InicioComponent,
    HojasDeVidaComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
