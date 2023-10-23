import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:8080/api/usuarios'; // ajusta esta URL según tu backend

  constructor(private http: HttpClient) {}

  get(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
  post(usuario: Usuario): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }
  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/usuarios/' + id);
  }
}
