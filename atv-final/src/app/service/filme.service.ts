import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const FILMES_POPULARES = "/movies/popular"
const PESQUISAR_FILME = "/search/movie"
const BASE_URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  listaFilme: [];

  constructor(private http: HttpClient) { }

  listarFilmes() {
    return this.get(`${BASE_URL}${FILMES_POPULARES}`);
  }

  buscarFilme(idFilme) {
    return this.post(`${BASE_URL}${PESQUISAR_FILME}`, { id: idFilme});
  }

  get(
    path: string,
    httpParams?: HttpParams | {
      [param: string]: string | string[];
    }): Observable<any> {
    return this.http.get(BASE_URL + path, { params: httpParams, reportProgress: true });
  }

  post(
    path: string,
    body?: any,
    httpParams?: HttpParams | {
      [param: string]: string | string[];
    }): Observable<any> {
    return this.http.post(BASE_URL + path, body, { params: httpParams, reportProgress: true });
  }

}
