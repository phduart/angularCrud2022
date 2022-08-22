import { Cliente } from './../models/clienteContatoResponse.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteContatoResponse } from '../models/clienteContatoResponse.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private listaCliente: Cliente[];
  private urlTodosClientes = 'http://localhost:8080/api/clientes/getClientes';
  private urlGetCliente = 'http://localhost:8080/api/clientes/getCliente?id=';
  private urlAddCliente = 'http://localhost:8080/api/clientes/addCliente';

  constructor(private httpClient: HttpClient) {
    this.listaCliente = [];

  }

  get clientes() {
    return this.listaCliente;
  }

  todos() : Observable<ClienteContatoResponse> {
      return this.httpClient.get<ClienteContatoResponse>(this.urlTodosClientes);
  }

  getCliente(id : number) : Observable<ClienteContatoResponse> {
    return this.httpClient.get<ClienteContatoResponse>(this.urlGetCliente + id);
  }

  adicionar(cliente: Cliente) {
    this.hidratar(cliente);

    return this.httpClient.post<Cliente>(this.urlAddCliente, cliente);
  }

  private hidratar(cliente: Cliente) {
    cliente.dt_create = new Date();
  }
}
