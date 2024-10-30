import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoedaEnriquecidaService {
  private apiKey = '81cb2bd464cb80818ee91cd5';
  private baseUrl = `https://v6.exchangerate-api.com/v6/${this.apiKey}`;

  constructor(private http: HttpClient) {}

  obterMoedasSuportadas(): Observable<any> {
    const url = `${this.baseUrl}/codes`;
    return this.http.get<any>(url);
  }
}
