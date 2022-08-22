import { ClienteService} from './services/clienteService.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-crud';
  transferencias: any[] = [];

  constructor(private service: ClienteService) {}

}
