import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionInstitucionalComponent } from './informacion-institucional.component';

describe('InformacionInstitucionalComponent', () => {
  let component: InformacionInstitucionalComponent;
  let fixture: ComponentFixture<InformacionInstitucionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionInstitucionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
