import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/crear-usuario/crear-usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {

  private apiUrl = 'http://localhost:8080/api/usuarios'; // ajusta esta URL según tu backend

  constructor(private http: HttpClient) {}

  get(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
  getById(id: number): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl + id);
  }
  post(usuario: Usuario): Observable<any> {
    return this.http.post(this.apiUrl, Usuario);
  }

  update(id: number, producto: any) {
    return this.http.put('http://localhost:8080/api/usuarios/' + id, producto);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/usuarios/' + id);
  }
}
