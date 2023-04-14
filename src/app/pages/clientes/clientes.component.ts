import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  clientes: ICliente[] = [];
  constructor(private clienteService: ClientesService, private router: ActivatedRoute, private route: Router) {}
  clienteCpf = '';

  ngOnInit() {

    this.clienteService.buscarTodosClientes().subscribe((result: ICliente[]) => {
      this.clientes = result;
    });

    const object: any = this.router.snapshot.paramMap.get('cpf');

     if (object != null) {
        this.clienteCpf = object;
     }

    if (this.clienteCpf) {
        console.log(this.clienteCpf);
        this.excluir();
    }




  }

  excluir(){

    this.clienteService.excluirCliente(this.clienteCpf).subscribe(result =>{
      console.log(this.clienteCpf)
      Swal.fire(
        'Sucesso',
        'Cliente Excluído com Sucesso',
        'success'

      )

    this.route.navigate(['/clientes']);

    }, error =>{
      console.log(error)
      Swal.fire(
        'Erro',
        'Erro na exclusão do Cliente',
        'error'

      )
    });

  }

}
