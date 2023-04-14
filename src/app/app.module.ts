
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LivrosComponent } from './pages/livros/livros.component';
// Modulo de chamadas http
import { HttpClientModule } from '@angular/common/http';
import { CadastrarAtualizarLivrosComponent } from './pages/cadastrar-atualizar-livros/cadastrar-atualizar-livros.component';
// Modulo para trabalhar com formulários
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CadastrarAtualizarClientesComponent } from './pages/cadastrar-atualizar-clientes/cadastrar-atualizar-clientes.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LivrosComponent,
    CadastrarAtualizarLivrosComponent,
    ClientesComponent,
    CadastrarAtualizarClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
