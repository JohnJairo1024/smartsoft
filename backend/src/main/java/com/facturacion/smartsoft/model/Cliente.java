package com.facturacion.smartsoft.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "clientes")
@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"})
@Data
public class Cliente implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "id_cliente")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCliente;

    @Column(nullable = false)
    private String nombre;

    private String apellido;

    private String direccion;

    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "yyyy/MM/dd")
    @Column(name = "fecha_nacimiento")
    private Date fechaNacimiento;

    private String telefono;

    private String email;

    @OneToMany(mappedBy = "cliente", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties(value = "cliente", allowSetters = true)
    @JsonIgnore
    private List<Factura> facturas;


}
