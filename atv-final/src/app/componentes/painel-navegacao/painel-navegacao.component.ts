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

  datasource = [
    { title: 'Card 1', cols: 1, rows: 1 },
    { title: 'Card 11', cols: 1, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.cards = this.datasource;
    this.filmeService.listarFilmes().subscribe(retorno => {
      if (retorno) {
        console.log(retorno);
      } else {
        window.alert("Não foi possível consultar lista de filmes");
      }
    });
  }

  //TODO - INSERIR FILTROS CORRETOS
  filtrar() {
    this.cards = this.cards.filter(card => card.title.indexOf(this.filtro) >= 0);
    if (this.filtro == undefined || this.filtro.length == 0) {
      this.cards = this.datasource;
    }
  }

}
