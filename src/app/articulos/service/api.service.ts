import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://newsapi.org/v2/everything?q=tesla&from=2023-10-02&sortBy=publishedAt&apiKey=b0564f087edd49c48f182056128f2201';
  constructor(private httpClient: HttpClient) {}
  public getData(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }
}
