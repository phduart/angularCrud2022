import { Cliente } from './../models/clienteContatoResponse.model';
import { ClienteService } from './../services/clienteService.service';
import { Component, Input, OnInit } from '@angular/core';
import { ClienteContatoResponse } from '../models/clienteContatoResponse.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() clientes: Cliente[];

  constructor(private service: ClienteService) {}

  ngOnInit(): void {
    this.service.todos().subscribe((clienteContatoResponse: ClienteContatoResponse) => {
      console.table(clienteContatoResponse.body);
      const clientesResponse = clienteContatoResponse.body;
      this.clientes = clientesResponse;
    })
  }

}
