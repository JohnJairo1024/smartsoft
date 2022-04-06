import {Component, OnInit} from '@angular/core';


import {Factura} from '../../model/factura';
import {FacturaService} from 'src/app/service/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html'
})
export class FacturaComponent implements OnInit {
  title: string;
  facturas: Factura[];

  constructor(private facturaService: FacturaService) {
  }

  ngOnInit(): void {
    this.title = 'LISTA DE FACTURAS';
    this.getFacturas();
  }

  public getFacturas(): void {
    this.facturaService.getFacturas().subscribe(facturas => {
      this.facturas = facturas;
    });
  }

}
