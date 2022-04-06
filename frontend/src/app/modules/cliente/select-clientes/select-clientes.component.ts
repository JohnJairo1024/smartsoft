import {Component, EventEmitter, OnInit, Output} from '@angular/core';


import {Cliente} from '../../../model/cliente';
import {ClienteService} from 'src/app/service/cliente.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'select-clientes',
  templateUrl: './select-clientes.component.html',
  styleUrls: ['./select-clientes.component.scss']
})
export class SelectClientesComponent implements OnInit {

  clientes: Cliente[];
  @Output() eventClient = new EventEmitter<Cliente>();

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.getClientes();
  }

  public getClientes(): void {
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  public enviarCliente(clienteSeleccionado): void {
    this.eventClient.emit(clienteSeleccionado);
  }

}
