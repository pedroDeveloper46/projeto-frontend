import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LivrosComponent } from './pages/livros/livros.component';
import { CadastrarAtualizarLivrosComponent } from './pages/cadastrar-atualizar-livros/cadastrar-atualizar-livros.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CadastrarAtualizarClientesComponent } from './pages/cadastrar-atualizar-clientes/cadastrar-atualizar-clientes.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'livros', component: LivrosComponent
  },
  {
    path: 'livros/cadastrar', component: CadastrarAtualizarLivrosComponent
  },
  {
    path: 'livros/editar/:id', component: CadastrarAtualizarLivrosComponent
  },
  {
    path: 'livros/deletar/:id', component: LivrosComponent
  },
  {
    path: 'clientes', component: ClientesComponent
  },

  {
    path: 'clientes/cadastrar', component: CadastrarAtualizarClientesComponent
  },
  {
    path: 'clientes/editar/:cpf', component: CadastrarAtualizarClientesComponent
  },
  {
    path: 'clientes/deletar/:cpf', component: ClientesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
