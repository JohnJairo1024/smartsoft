import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


import {Producto} from '../../../model/producto';
import {ProductoService} from 'src/app/service/producto.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'select-productos',
  templateUrl: './select-productos.component.html',
  styleUrls: ['./select-productos.component.scss']
})
export class SelectProductosComponent implements OnInit {
  productos: Producto[];
  // tslint:disable-next-line:no-input-rename
  @Input('producto-seleccionado') productoSeleccionado: Producto = {};
  @Output() eventEmitterProducto = new EventEmitter<Producto>();

  constructor(private productoService: ProductoService) {
  }

  ngOnInit(): void {
    this.getProductos();
  }

  public getProductos(): void {
    this.productoService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }
}
