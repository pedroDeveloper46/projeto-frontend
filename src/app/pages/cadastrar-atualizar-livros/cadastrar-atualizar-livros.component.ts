import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ILivro } from 'src/app/interfaces/livro';
import { LivrosService } from 'src/app/services/livros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-atualizar-livros',
  templateUrl: './cadastrar-atualizar-livros.component.html',
  styleUrls: ['./cadastrar-atualizar-livros.component.css']
})
export class CadastrarAtualizarLivrosComponent {

  livroForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    ano: new FormControl(2000, Validators.required),
    quantidade: new FormControl(0, Validators.required),
    valorUnitario: new FormControl(0, Validators.required),
    status: new FormControl('Normal', Validators.required),
  })
  constructor(private livrosService: LivrosService, private route: ActivatedRoute, private router: Router) {}
  livroId = 0;

  ngOnInit() {
    this.livroId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.livroId) {
      this.livrosService.buscarLivroPorId(this.livroId).subscribe((livro: ILivro) => {
        this.livroForm.setValue({
          titulo: livro.titulo,
          ano: livro.ano || 2000,
          quantidade: livro.quantidade || 0,
          valorUnitario: livro.valorUnitario || 0,
          status: livro.status || 'Normal'
        })
      });
    }else if(this.livroId != 0){
      Swal.fire(
        'Erro',
        'Identificador não encontrado',
        'error'

      )
    }
  }

  cadastrar() {

    if(this.livroId){
      this.editar();
    }else{

      const livro: ILivro = this.livroForm.value as ILivro;
      this.livrosService.cadastrarLivro(livro).subscribe(result => {
      Swal.fire(
        'Sucesso',
        'Livro Cadastrado com Sucesso',
        'success'

      )
      this.router.navigate(['/livros']);
    }, error => {
      Swal.fire(
        'Erro',
        'Ocorreu um erro no Cadastro',
        'error'

      )
    });

    }


  }



  editar(){
    const livro: ILivro = this.livroForm.value as ILivro;
    this.livrosService.editarLivro(livro, this.livroId).subscribe(result => {
      Swal.fire(
        'Sucesso',
        'Livro Alterado com Sucesso',
        'success'

      )
      this.router.navigate(['/livros']);
    }, error => {
      console.log(error);
      Swal.fire(
        'Erro',
        'Ocorreu um erro na alteração',
        'error'

      )
    });





  }

}
