import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  private apiUrl = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) {}
  get(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
  getById(id: number): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8080/usuarios/' + id);
  }
  post(usuario: Usuario): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }
  put(id: number, usuario: Usuario): Observable<any> {
    return this.http.put('http://localhost:8080/usuarios/' + id, usuario);
  }
}
