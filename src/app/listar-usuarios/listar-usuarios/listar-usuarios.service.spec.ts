import { TestBed } from '@angular/core/testing';

import { ListarUsuariosService } from './listar-usuarios.service';

describe('ListarUsuariosService', () => {
  let service: ListarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
