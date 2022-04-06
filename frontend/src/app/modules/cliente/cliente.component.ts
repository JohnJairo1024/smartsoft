import {Component, OnInit} from '@angular/core';


import {Cliente} from '../../model/cliente';
import {ClienteService} from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[];

  title: string;

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.title = 'CLIENTES';
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

}
