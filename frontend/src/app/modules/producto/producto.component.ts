import {Component, OnInit} from '@angular/core';


import {Producto} from '../../model/producto';
import {ProductoService} from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit {

  title: string;

  productos: Producto[];

  constructor(private productoService: ProductoService) {
  }

  ngOnInit(): void {
    this.title = 'Listado de Productos';
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

}
