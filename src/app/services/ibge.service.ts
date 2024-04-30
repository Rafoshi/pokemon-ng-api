import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estado } from '../interfaces/Estado';
@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  private url: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

  constructor(private http: HttpClient) {

  }

  listar(): Observable<Estado[]>{
    return this.http.get<Estado[]>(this.url) as Observable<Estado[]>;
  }
}
