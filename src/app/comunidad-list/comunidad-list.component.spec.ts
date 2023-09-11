import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadListComponent } from './comunidad-list.component';

describe('ComunidadListComponent', () => {
  let component: ComunidadListComponent;
  let fixture: ComponentFixture<ComunidadListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComunidadListComponent]
    });
    fixture = TestBed.createComponent(ComunidadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
