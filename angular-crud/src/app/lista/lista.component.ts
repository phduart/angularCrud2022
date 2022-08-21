import { ClienteServiceService } from './../services/clienteService.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() transferencias: any[];

  constructor(private service: ClienteServiceService) {}

  ngOnInit(): void {
    this.transferencias = this.service.transferencias;
  }

}
