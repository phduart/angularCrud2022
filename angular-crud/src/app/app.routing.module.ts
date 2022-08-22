import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { ListaComponent } from './lista/lista.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'lista', pathMatch: 'full'},
  {path: 'lista', component: ListaComponent},
  {path: 'novo-cliente', component: NovoClienteComponent},
  {path: 'detalhe-cliente', component: DetalheClienteComponent}
]

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
