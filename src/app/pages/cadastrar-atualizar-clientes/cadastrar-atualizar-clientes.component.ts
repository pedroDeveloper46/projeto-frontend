import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { IEndereco } from 'src/app/interfaces/endereco';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cadastrar-atualizar-clientes',
  templateUrl: './cadastrar-atualizar-clientes.component.html',
  styleUrls: ['./cadastrar-atualizar-clientes.component.css']
})
export class CadastrarAtualizarClientesComponent {
  clienteForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    telefone: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    rendimentoMensal: new FormControl(0, Validators.required),
    endereco: this.formBuilder.group({
      rua: ['', Validators.required],
      numero: [0, Validators.required],
      cep: ['', Validators.required]
    })


  });
  constructor(private clienteService: ClientesService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {}
  clienteCpf = '';



  ngOnInit() {
     const object: any = this.route.snapshot.paramMap.get('cpf');

     if (object != null) {
        this.clienteCpf = object;
     }

    if (this.clienteCpf) {

      this.clienteService.buscarClientePorCpf(this.clienteCpf).subscribe((cliente: ICliente) => {
        this.clienteForm.setValue({
          nome: cliente.nome,
          cpf: cliente.cpf,
          telefone: cliente.telefone,
          rendimentoMensal: cliente.rendimentoMensal || 0,
          endereco: {
            rua: cliente.endereco.rua,
            numero: cliente.endereco.numero || 0,
            cep: cliente.endereco.cep
          }

        })
      });
    }else if(this.clienteCpf === ' '){
      Swal.fire(
        'Erro',
        'Identificador não encontrado',
        'error'

      )
    }
  }

  cadastrar(){

    if(this.clienteCpf){
      this.editar();
    }else{

      const cliente: ICliente = this.clienteForm.value as ICliente;
      this.clienteService.cadastrarCliente(cliente).subscribe(result => {
      Swal.fire(
        'Sucesso',
        'Cliente Cadastrado com Sucesso',
        'success'

      )
      this.router.navigate(['/clientes']);
    }, error => {
      console.log(error)
      Swal.fire(
        'Erro',
        'Ocorreu um erro no Cadastro',
        'error'

      )
    });

    }




  }

  editar(){

  const cliente: ICliente = this.clienteForm.value as ICliente;
    this.clienteService.editarCliente(cliente, this.clienteCpf).subscribe(result => {
      Swal.fire(
        'Sucesso',
        'Cliente Alterado com Sucesso',
        'success'

      )
      this.router.navigate(['/clientes']);
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
