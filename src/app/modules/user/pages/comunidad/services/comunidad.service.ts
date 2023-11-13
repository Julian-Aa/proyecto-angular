import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comunidad } from 'src/app/core/models/comunidad.model';
import { Comentario } from 'src/app/core/models/comentario.model';

@Injectable({
  providedIn: 'root',
})
export class ComunidadService {
  private apiUrl = 'http://localhost:8080/api/comunidades';
  constructor(private http: HttpClient) {}
  get(): Observable<Comunidad[]> {
    return this.http.get<Comunidad[]>(this.apiUrl);
  }
  getComentarios(id: number): Observable<Comentario[]> {
    return this.http.get<Comentario[] | Comentario[]>(
      'http://localhost:8080/api/comunidades/comentarios/' + id
    );
  }
  getById(id: number): Observable<Comunidad> {
    return this.http.get<Comunidad>(
      'http://localhost:8080/api/comunidades/' + id
    );
  }
  getComunidadByUser(UserId: number): Observable<Comunidad[]> {
    return this.http.get<Comunidad[]>(
      'http://localhost:8080/api/comunidades/user/' + UserId
    );
  }
  createComunidad(comunidad: Comunidad): Observable<any> {
    return this.http.post(this.apiUrl, comunidad);
  }
  enviarMensaje(comentario: Comentario): Observable<any> {
    return this.http.post(
      'http://localhost:8080/api/comunidades/comentario',
      comentario
    );
  }
  addImagen(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<string>(
      'http://localhost:8080/api/comunidades/image-rest',
      formData
    );
  }

  put(id: number, comunidad: Comunidad): Observable<any> {
    return this.http.put(
      'http://localhost:8080/api/comunidades/' + id,
      comunidad
    );
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/comunidades/' + id);
  }
}
