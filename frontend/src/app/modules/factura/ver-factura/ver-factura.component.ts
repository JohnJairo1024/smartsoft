import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Factura} from '../../../model/factura';
import {FacturaService} from 'src/app/service/factura.service';


@Component({
  selector: 'app-ver-factura',
  templateUrl: './ver-factura.component.html',
  styleUrls: ['./ver-factura.component.css']
})
export class VerFacturaComponent implements OnInit {
  title: string;
  factura: Factura;
  total: number;

  constructor(private facturaService: FacturaService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.factura = {};
    this.factura.cliente = {};
    this.factura.detalle = [];

    const idFactura: string = this.route.snapshot.paramMap.get('id');

    this.facturaService.getFactura(idFactura).subscribe(factura => {
      this.factura = factura;
      this.total = this.facturaService.calcularTotal(this.factura.detalle);
      this.title = 'No de Factura: ' + this.factura.numFactura;
    });
  }

}
