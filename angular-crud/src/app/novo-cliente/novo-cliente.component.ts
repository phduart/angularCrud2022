import { Cliente } from './../models/clienteContatoResponse.model';
import { Component, EventEmitter, Output } from "@angular/core";
import { ClienteService } from './../services/clienteService.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-novo-cliente',
    templateUrl:'./novo-cliente.component.html',
    styleUrls:['./novo-cliente.component.scss']

})
export class NovoClienteComponent {

  @Output() aoTransferir = new EventEmitter<any>();
  name_client: string
  cpf_cnpj: string
  rg_ie: string
  dt_create: Date
  active: string

  constructor(private service: ClienteService, private router: Router) {}

  transferir() {
    console.log('Cadastrando novo cliente');
    const novoCliente: Cliente = {name_client: this.name_client, cpf_cnpj: this.cpf_cnpj, rg_ie: this.rg_ie, dt_create: this.dt_create, active: this.active};

    this.service.adicionar(novoCliente).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigate(['lista']);
    },
    error => console.error(error)
    )

  }

  limparCampos(){
    this.name_client = "";
    this.cpf_cnpj = "";
    this.rg_ie = "";
    this.active = "";
}

}
