import {Component, OnInit} from '@angular/core';


import Swal from 'sweetalert2';


import {Factura} from '../../../model/factura';
import {ClienteService} from 'src/app/service/cliente.service';
import {FacturaService} from 'src/app/service/factura.service';

@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html'
})
export class FormFacturaComponent implements OnInit {
  title: string;
  factura: Factura;

  constructor(private clienteService: ClienteService,
              private facturaService: FacturaService) {
  }

  ngOnInit(): void {
    this.title = 'FACTURA';
    this.factura = {};
    this.factura.detalle = [];
    this.factura.fecha = new Date().toLocaleDateString('en-ZA');
  }

  public obtenerCliente(cliente): void {
    // tslint:disable-next-line:triple-equals
    if (cliente.target.value != 0) {
      this.clienteService
        .getCliente(cliente.target.value)
        .subscribe((client) => {
          this.factura.cliente = client;
        });
    }
  }

  public generarMensaje(
    iconParam: any,
    titleParam: any,
    textParam: any,
    footerParam: any
  ): void {
    Swal.fire({
      icon: iconParam,
      title: titleParam,
      text: textParam,
      footer: footerParam,
    });
  }

  public obtenerDetalleFactura($event): void {
    this.factura.detalle = $event;
  }

  public crearFactura(): void {
    if (
      this.factura.detalle.length === 0
    ) {
      this.generarMensaje('error',
        'Error',
        'Por favor registrar al menos un detalle',
        'No hay detalles relacionados a la factura');
    } else if (
      this.factura.cliente === undefined
    ) {
      this.generarMensaje('error',
        'Error',
        'Por favor seleccionar un cliente',
        'No hay un cliente para relacionar a la factura');
    } else {
      this.asignarNumDetalle();

      this.facturaService.saveFactura(this.factura).subscribe(factura => {
        if (factura) {
          this.generarMensaje('success', 'Exitó', 'La factura se ha almacenado satisfactoriamente', 'Operación exitosa');
          window.location.reload();
        } else {
          console.log('error');
        }
      });
    }
  }

  public asignarNumDetalle(): void {
    let numDetalle = 1;

    this.factura.detalle.forEach(detalle => {
      detalle.numDetalle = numDetalle;
      numDetalle++;
    });
  }

}
