import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { ILivro } from '../interfaces/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  endpoint = 'livraria/livro'
  api = environment.api;
  constructor(private http: HttpClient) { }

  buscarTodosLivros() {
    return this.http.get<ILivro[]>(`${this.api}/${this.endpoint}`);
  }

  cadastrarLivro(livro: ILivro) {
    return this.http.post(`${this.api}/${this.endpoint}/cadastrar`, livro);
  }

  editarLivro(livro: ILivro, id:number){
    return this.http.put(`${this.api}/${this.endpoint}/atualizar/${id}`, livro)
  }

  buscarLivroPorId(id: number) {
    return this.http.get<ILivro>(`${this.api}/${this.endpoint}/${id}`);
  }

  excluirLivro(id:number){
    return this.http.get<ILivro>(`${this.api}/${this.endpoint}/deletar/${id}`);
  }

}
