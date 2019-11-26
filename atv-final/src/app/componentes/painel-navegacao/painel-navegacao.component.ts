import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/service/filme.service';

@Component({
  selector: 'app-painel-navegacao',
  templateUrl: './painel-navegacao.component.html',
  styleUrls: ['./painel-navegacao.component.css']
})
export class PainelNavegacaoComponent implements OnInit {
  filtro;
  cards;
  datasource = [];

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filmeService.listarFilmes().subscribe(retorno => {
      if (retorno) {
        console.log(retorno);
        this.datasource = retorno.results;
        this.cards = this.datasource;
      } else {
        window.alert("Não foi possível consultar lista de filmes");
      }
    });
  }

  filtrar() {
    this.cards = this.datasource;
    this.cards = this.cards.filter(card => card.title.toUpperCase().indexOf(this.filtro.toUpperCase()) >= 0);
  }

}
