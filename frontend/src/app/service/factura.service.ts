import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


import {environment} from '../../environments/environment';
import {Factura} from '../model/factura';
import {DetalleFactura} from '../model/detallefactura';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  urlService: string = environment.baseURL + '/facturas';

  constructor(private httpClient: HttpClient) {
  }

  public getFacturas(): Observable<any> {
    return this.httpClient.get<Factura>(this.urlService);
  }

  public saveFactura(factura: Factura): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(factura);
    return this.httpClient.post<Factura>(this.urlService, body, {headers});
  }

  public getFactura(id: string): Observable<any> {
    return this.httpClient.get<Factura>(this.urlService + '/' + id);
  }

  public calcularTotal(detalles: DetalleFactura[]): number {
    let total = 0;
    detalles.forEach(detalle => total += detalle.precio);

    return total;
  }
}
