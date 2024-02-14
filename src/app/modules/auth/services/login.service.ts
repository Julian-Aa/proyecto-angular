import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/auth/login';
  constructor(private http: HttpClient) {}
  post(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }
}
