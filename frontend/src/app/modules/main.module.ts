import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MainRoutingModule} from './main-routing.module';


import {ClienteComponent} from './cliente/cliente.component';
import {FacturaComponent} from './factura/factura.component';
import {FormFacturaComponent} from './factura/form/form-factura.component';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main.component';
import {ProductoComponent} from './producto/producto.component';
import {FormDetalleComponent} from './factura/form-detalle/form-detalle.component';
import {VerFacturaComponent} from './factura/ver-factura/ver-factura.component';
import {SelectClientesComponent} from '@modules/cliente/select-clientes/select-clientes.component';
import {SelectProductosComponent} from '@modules/producto/select-productos/select-productos.component';

// import {InfraestructureModule} from '@shared/infraestructure.module';

@NgModule({
  declarations: [
    ClienteComponent,
    FacturaComponent,
    FormFacturaComponent,
    HomeComponent,
    MainComponent,
    ProductoComponent,
    FormDetalleComponent,
    VerFacturaComponent,
    SelectClientesComponent,
    SelectProductosComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    // InfraestructureModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    SelectClientesComponent,
    SelectProductosComponent
  ],
  providers: []
})
export class MainModule {

}
