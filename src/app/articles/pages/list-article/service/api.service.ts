import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulos } from 'src/app/core/models/articulos.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl2 = 'http://localhost:8080/api/articulos';
  private apiUrl =
    'https://newsapi.org/v2/everything?q=tesla&from=2023-11-02&sortBy=publishedAt&apiKey=b0564f087edd49c48f182056128f2201';
  constructor(private httpClient: HttpClient) {}
  getData(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }
  get(): Observable<Articulos[]> {
    return this.httpClient.get<Articulos[]>(this.apiUrl);
  }
}
