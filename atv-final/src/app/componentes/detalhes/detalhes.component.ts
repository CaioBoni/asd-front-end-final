import { FilmeService } from 'src/app/service/filme.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  filme = {
    adult: false,
    backdrop_path: '',
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [],
    production_countries: [],
    release_date: '',
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FilmeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id && params.id !== 0) {
        this.service.buscarFilme(params.id).subscribe(retorno => {
          this.updateFilme(retorno);
          console.log('filme', this.filme);
        });
      } else {
        this.router.navigate(['index']);
      }
    });
  }

  updateFilme(retorno) {
    this.filme = {
      adult: retorno.adult,
      backdrop_path: retorno.backdrop_path,
      belongs_to_collection: retorno.belongs_to_collection,
      budget: retorno.budget,
      genres: retorno.genres,
      homepage: retorno.homepage,
      id: retorno.id,
      imdb_id: retorno.imdb_id,
      original_language: retorno.original_language,
      original_title: retorno.original_title,
      overview: retorno.overview,
      popularity: retorno.popularity,
      poster_path: retorno.poster_path,
      production_companies: retorno.production_companies,
      production_countries: retorno.production_countries,
      release_date: retorno.release_date,
      revenue: retorno.revenue,
      runtime: retorno.runtime,
      spoken_languages: retorno.spoken_languages,
      status: retorno.status,
      tagline: retorno.tagline,
      title: retorno.title,
      video: retorno.video,
      vote_average: retorno.vote_average,
      vote_count: retorno.vote_count
    };
  }

}
