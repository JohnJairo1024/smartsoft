package com.facturacion.smartsoft.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @author John ochoa
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetalleFacturaPK implements Serializable {

    private static Long serialVersionUID = 1L;

    private Factura factura;
    private Long numDetalle;

}
