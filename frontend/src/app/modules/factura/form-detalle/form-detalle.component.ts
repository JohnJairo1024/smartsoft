import {Component, EventEmitter, OnInit, Output} from '@angular/core';


import Swal from 'sweetalert2';


import {DetalleFactura} from '../../../model/detallefactura';
import {ProductoService} from 'src/app/service/producto.service';
import {FacturaService} from 'src/app/service/factura.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-detalle',
  templateUrl: './form-detalle.component.html'
})
export class FormDetalleComponent implements OnInit {
  detalles: DetalleFactura[];
  detalle: DetalleFactura;
  total: number;

  @Output() eventEmitterDetalleFactura = new EventEmitter<DetalleFactura[]>();


  constructor(private productoService: ProductoService,
              private facturaService: FacturaService) {
  }

  ngOnInit(): void {
    this.detalles = [];
    this.total = 0;
    this.init();
  }

  public init() {
    this.detalle = {};
    this.detalle.producto = {};
    this.detalle.producto.idProducto = 0;
    this.detalle.precio = 0;
    this.detalle.cantidad = 0;
  }

  public changeProduct(producto) {
    // tslint:disable-next-line:triple-equals
    if (producto.target.value != 0) {
      this.productoService
        .getProducto(producto.target.value)
        .subscribe((product) => {
          this.detalle.producto = product;

          this.ajustarStock();

          if (this.detalle.cantidad > this.detalle.producto.stock) {
            this.detalle.cantidad = this.detalle.producto.stock;
          }
          this.calcularPrecio();
        });
    } else {
      this.init();
    }
  }

  public calcularPrecio(): void {
    this.detalle.precio = this.detalle.producto.precio * this.detalle.cantidad;
  }

  public agregarDetalle(): void {
    if (
      this.detalle.producto.idProducto === 0 ||
      this.detalle.cantidad === 0
    ) {
      this.generarMensaje(
        'error',
        'Error',
        'Por favor diligenciar todos los campos!',
        ''
      );
    } else {
      const indice: number = this.obtenerIndiceProducto(
        this.detalle.producto.idProducto
      );

      if (indice !== -1) {
        const nuevaCantidad: number =
          this.detalle.cantidad + this.detalles[indice].cantidad;

        if (this.detalle.producto.stock < this.detalle.cantidad) {
          this.generarMensaje(
            'error',
            'Error',
            'Por favor corregir la cantidad del producto solicitado',
            'Stock insuficiente para realizar esta operación!'
          );
        } else {
          this.detalles[indice].cantidad = nuevaCantidad;
          this.detalles[indice].precio = this.detalles[indice].producto.precio * this.detalles[indice].cantidad;
          this.calcularPrecio();
          this.init();
        }
      } else {
        this.detalles.push(this.detalle);
        this.init();
      }
      this.calcularTotal();
      this.enviarDetalleFactura();
    }
  }

  public removerDetalle(idProducto: number): void {
    const indice = this.obtenerIndiceProducto(idProducto);
    this.detalles.splice(indice, 1);
    this.init();
    this.calcularTotal();
    this.enviarDetalleFactura();
  }

  public ajustarStock(): void {
    this.detalles.forEach((detalle) => {
      if (detalle.producto.idProducto === this.detalle.producto.idProducto) {
        this.detalle.producto.stock -= detalle.cantidad;
      }
    });
  }

  public obtenerIndiceProducto(idProducto: number): number {
    const indice: number = this.detalles.findIndex(
      // tslint:disable-next-line:triple-equals
      (detalle) => detalle.producto.idProducto == idProducto
    );

    return indice;
  }

  public calcularTotal(): void {
    this.total = this.facturaService.calcularTotal(this.detalles);
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

  public enviarDetalleFactura() {
    this.eventEmitterDetalleFactura.emit(this.detalles);
  }
}
