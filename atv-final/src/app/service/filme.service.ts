import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const PESQUISAR_FILME_START = 'https://api.themoviedb.org/3/movie/';
const PESQUISAR_FILME_END = '?api_key=0b2bde81e23eda2d0229800eb23237e4';

const FILMES_POPULARES = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0b2bde81e23eda2d0229800eb23237e4';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  listaFilme: any[] = [];

  constructor(private http: HttpClient) { }

  listarFilmes() {
    return this.get(`${FILMES_POPULARES}`, '');
  }

  buscarFilme(idFilme) {
    return this.get(`${PESQUISAR_FILME_START}${idFilme}${PESQUISAR_FILME_END}`, '');
  }

  get(url, param): Observable<any> {
    return this.http.get(url, {
      params: {
        sort_by: 'popularity.desc',
        api_key: '0b2bde81e23eda2d0229800eb23237e4'
      }
    });
  }

  post(
    path: string,
    body?: any,
    httpParams?: HttpParams | {
      [param: string]: string | string[];
    }): Observable<any> {
    return this.http.post(path, body, { params: httpParams, reportProgress: true });
  }

}
