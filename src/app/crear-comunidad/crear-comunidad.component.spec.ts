import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearComunidadComponent } from './crear-comunidad.component';

describe('CrearComunidadComponent', () => {
  let component: CrearComunidadComponent;
  let fixture: ComponentFixture<CrearComunidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearComunidadComponent]
    });
    fixture = TestBed.createComponent(CrearComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
