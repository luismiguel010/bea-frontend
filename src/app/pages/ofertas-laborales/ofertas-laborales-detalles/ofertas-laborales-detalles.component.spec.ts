import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasLaboralesDetallesComponent } from './ofertas-laborales-detalles.component';

describe('OfertasLaboralesDetallesComponent', () => {
  let component: OfertasLaboralesDetallesComponent;
  let fixture: ComponentFixture<OfertasLaboralesDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasLaboralesDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasLaboralesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
