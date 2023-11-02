import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulos } from 'src/app/core/models/articulos.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'http://localhost:8080/api/articulos';

  constructor(private http: HttpClient) {}
  get(): Observable<Articulos[]> {
    return this.http.get<Articulos[]>(this.apiUrl);
  }
  getById(id: number): Observable<Articulos[]> {
    return this.http.get<Articulos[]>(this.apiUrl + id);
  }
  createArticle(article: Articulos): Observable<any> {
    return this.http.post(this.apiUrl, article);
  }
  addImagen(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<string>(
      'http://localhost:8080/api/articulos/image-rest',
      formData
    );
  }

  put(id: number, article: Articulos): Observable<any> {
    return this.http.put('http://localhost:8080/api/articulos/' + id, article);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/articulos/' + id);
  }
}
