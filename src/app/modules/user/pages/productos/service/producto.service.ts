import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/core/models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/productos';

  constructor(private http: HttpClient) {}
  get(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  getById(id: number): Observable<Producto[]> {
    return this.http.get<Producto[]>('http://localhost:8080/productos/' + id);
  }
  getProductosByUser(UserId: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(
      'http://localhost:8080/productos/' + UserId
    );
  }
  createProduct(producto: Producto, usuario: string): Observable<any> {
    const data = {
      producto: producto,
      usuario: usuario,
    };
    console.log('prueba' + usuario);
    return this.http.post('http://localhost:8080/productos', data);
  }
  put(id: number, producto: Producto): Observable<any> {
    return this.http.put('http://localhost:8080/productos/' + id, producto);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/productos/' + id);
  }
}
