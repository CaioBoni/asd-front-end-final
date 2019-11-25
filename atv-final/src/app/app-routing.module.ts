import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelNavegacaoComponent } from './componentes/painel-navegacao/painel-navegacao.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: PainelNavegacaoComponent },
  { path: 'detalhes', redirectTo: 'detalhes/0', pathMatch: 'full'  },
  { path: 'detalhes/:id', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
