package com.facturacion.smartsoft.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * @author John ochoa
 */
@Entity
@Table(name = "facturas")
@Data
public class Factura implements Serializable {

    private static final Long serialVersionUID = 1L;

    @Id
    @Column(name = "num_factura")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numFactura;

    @JoinColumn(name = "id_cliente")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JsonIgnoreProperties(value = "facturas")
    private Cliente cliente;

    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "yyyy/MM/dd")
    @Column(nullable = false)
    private Date fecha;

    @JsonIgnoreProperties(value = {"factura"}, allowSetters = true)
    @OneToMany(mappedBy = "factura", cascade = CascadeType.ALL)
    private List<DetalleFactura> detalle;

}
