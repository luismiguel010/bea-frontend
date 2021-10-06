import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojasDeVidaModalComponent } from './hojas-de-vida-modal.component';

describe('HojasDeVidaModalComponent', () => {
  let component: HojasDeVidaModalComponent;
  let fixture: ComponentFixture<HojasDeVidaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HojasDeVidaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HojasDeVidaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
