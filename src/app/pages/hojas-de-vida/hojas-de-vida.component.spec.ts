import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojasDeVidaComponent } from './hojas-de-vida.component';

describe('HojasDeVidaComponent', () => {
  let component: HojasDeVidaComponent;
  let fixture: ComponentFixture<HojasDeVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HojasDeVidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HojasDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
