package com.facturacion.smartsoft.model;


import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author John ochoa
 */
@Entity
@Table(name = "detalles_factura")
@IdClass(DetalleFacturaPK.class)
@Data
public class DetalleFactura implements Serializable {

    private static final Long serialVersionUID = 1L;

    @Id
    @Column(name = "num_detalle")
    private Long numDetalle;

    @Id
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_factura")
    private Factura factura;

    @JoinColumn(name = "id_producto", nullable = false)
    @OneToOne()
    private Producto producto;

    private int cantidad;
    private long precio;


}
