package com.facturacion.smartsoft.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author John ochoa
 */
@Entity
@Table(name = "productos")
@Data
public class Producto implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "id_producto")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProducto;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private Long precio;

    private int stock;

    public void updateStock(int sellStock) {
        this.stock -= sellStock;
    }

}
