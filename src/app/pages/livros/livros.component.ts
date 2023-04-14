import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILivro } from 'src/app/interfaces/livro';
import { LivrosService } from 'src/app/services/livros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent {
  livros: ILivro[] = [];
  constructor(private livrosService: LivrosService, private router: ActivatedRoute, private route: Router) {}
  livroId = 0;

  ngOnInit() {

    this.livroId = Number(this.router.snapshot.paramMap.get('id'));

    if (this.livroId) {
        this.excluir();
    }

    this.livrosService.buscarTodosLivros().subscribe((result: ILivro[]) => {
      this.livros = result;
    });
  }

  excluir(){

      this.livrosService.excluirLivro(this.livroId).subscribe(result =>{
        Swal.fire(
          'Sucesso',
          'Livro Excluído com Sucesso',
          'success'

        )

      }, error =>{
        console.log(error)
        Swal.fire(
          'Erro',
          'Erro na exclusão do Livro',
          'error'

        )
      });

      this.route.navigate(['/livros']);
    }





}
