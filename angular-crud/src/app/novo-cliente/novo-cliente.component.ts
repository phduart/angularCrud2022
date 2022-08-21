import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-novo-cliente',
    templateUrl:'./novo-cliente.component.html',
    styleUrls:['./novo-cliente.component.scss']

})
export class NovoClienteComponent {

  @Output() aoTransferir = new EventEmitter<any>();
  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;


}

}
