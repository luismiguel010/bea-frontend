import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionesInicioComponent } from './capacitaciones-inicio.component';

describe('CapacitacionesInicioComponent', () => {
  let component: CapacitacionesInicioComponent;
  let fixture: ComponentFixture<CapacitacionesInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacitacionesInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitacionesInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
