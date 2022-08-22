import { ClienteContatoResponse, Contact } from './../models/clienteContatoResponse.model';
import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../models/clienteContatoResponse.model';
import { ClienteService } from '../services/clienteService.service';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.scss']
})
export class DetalheClienteComponent implements OnInit {

  @Input() cliente: Cliente;
  contatos: Contact[];

  name_client: string
  cpf_cnpj: string
  rg_ie: string
  dt_create: Date
  active: string
  contact_number: number

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.service.getCliente(1).subscribe((clienteContatoResponse: ClienteContatoResponse) => {
      console.table(clienteContatoResponse);
      const clientesResponse = clienteContatoResponse.body[0];
      this.cliente = clientesResponse;
      if(clienteContatoResponse.body[0].contacts){
        this.contatos = clienteContatoResponse.body[0].contacts;
      }

    });
  }

  alterar(){

  }

  addContato(){

  }

}
